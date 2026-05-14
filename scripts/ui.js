import { getResultsTemplate } from "./templates.js";

export function renderQuestion(question, onSelect) {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");
    questionContainer.textContent = question.question;
    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => onSelect(answer, button));

        answersContainer.appendChild(button);
    });
}

export function renderResults(results) {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const topResult = results[0];

    app.innerHTML =
        getResultsTemplate(
            topResult,
            results
        );
}

export function renderSelectionInfo(question, selectedCount) {
    const info = document.getElementById("selection-info");

    if (question.type === "single") {
        info.textContent = "Bitte 1 Antwort auswählen";
        return;
    }

    if (selectedCount >= question.maxSelections) {
        info.textContent = "Maximale Auswahl erreicht";
        return;
    }

    info.textContent = `Bis zu ${question.maxSelections} Antworten möglich`;
}