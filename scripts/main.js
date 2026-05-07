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

const nextBtn = document.getElementById("next-btn");
window.addEventListener("DOMContentLoaded", init);

function init() {
    bindEvents();
    loadQuestion();
    updateNextButton();
}

function bindEvents() {
    nextBtn.addEventListener("click", nextQuestion);
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
    renderResults(results);
}