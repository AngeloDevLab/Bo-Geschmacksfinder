import { questions } from "./data/questions.js";

import { state } from "./state.js";

import {
    addScore,
    calculateResults
} from "./scoring.js";

import {
    renderQuestion,
    renderResults,
    renderSelectionInfo
} from "./ui.js";

import {
    trackPageVisit,
    trackQuizCompleted,
    trackCtaClicked
} from "./tracking.js";

const nextBtn = document.getElementById("next-btn");
window.addEventListener("DOMContentLoaded", init);

function init() {
    bindEvents();
    loadQuestion();
    updateNextButton();
    trackPageVisit();
}

function bindEvents() {
    nextBtn.addEventListener("click", nextQuestion);
    document.addEventListener("click", handleGlobalClick);
}

function loadQuestion() {
    const question = questions[state.currentQuestion];
    renderQuestion(question, handleAnswer);

    const maxSelections = question.maxSelections || 1;
    renderSelectionInfo(question, 0);
}

function handleAnswer(answer, button) {
    const question = questions[state.currentQuestion];

    if (question.type === "single") {
        clearSelections();
        state.selectedAnswers = [answer];
        button.classList.add("selected");
    }

    if (question.type === "multiple") {
        toggleMultipleAnswer(
            answer,
            button,
            question.maxSelections
        );
    }

    const maxSelections = question.maxSelections || 1;

    renderSelectionInfo(question, state.selectedAnswers.length);
    updateNextButton();
}

function toggleMultipleAnswer(answer, button, maxSelections) {
    const alreadySelected = state.selectedAnswers.includes(answer);

    if (alreadySelected) {
        state.selectedAnswers = state.selectedAnswers.filter(a => a !== answer);
        button.classList.remove("selected");

        return;
    }

    if (state.selectedAnswers.length >= maxSelections) {
        return;
    }

    state.selectedAnswers.push(answer);
    button.classList.add("selected");
}

function clearSelections() {
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.classList.remove(
            "selected"
        );
    });
}

function updateNextButton() {
    nextBtn.disabled = state.selectedAnswers.length === 0;
}

function nextQuestion() {
    state.selectedAnswers.forEach(answer => {
        addScore(answer);
    });

    state.selectedAnswers = [];
    state.currentQuestion++;

    if (state.currentQuestion < questions.length) {
        loadQuestion();
        updateNextButton();

        return;
    }

    const results = calculateResults();
    trackQuizCompleted();
    renderResults(results);
}

function handleGlobalClick(event) {
    if (event.target.closest("#cta-btn")) {
        handleCtaClick();
    }
}

function handleCtaClick() {
    trackCtaClicked();
    window.open("https://www.bofrost.de", "_blank");
}