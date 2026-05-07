export function getResultsTemplate(topResult, results) {
    return `
        <div class="results-card">

            <h1>
                ${topResult.emoji}
                ${topResult.name}
            </h1>

            <p class="result-percent">
                Du bist zu
                ${topResult.percent}%
                ${topResult.name}
            </p>

            <p class="result-description">
                ${topResult.description}
            </p>

            <div class="recommendations">
                ${topResult.recommendations
                    .map(item => `<span>${item}</span>`)
                    .join("")}
            </div>

            <div class="results-overview">

                ${results.map(getBarTemplate).join("")}

            </div>

            <a href="https://www.bofrost.de" target="_blank">
                <button id="cta-btn">
                    Passende Produkte entdecken
                </button>
            </a>

        </div>
    `;
}

function getBarTemplate(result) {
    return `
        <div class="result-bar-item">

            <div class="result-bar-header">
                <span>
                    ${result.emoji}
                    ${result.name}
                </span>

                <strong>
                    ${result.percent}%
                </strong>
            </div>

            <div class="progress-bar">
                <div
                    class="progress-fill"
                    style="
                        width: ${result.percent}%;
                        background: ${result.color};
                    "
                ></div>
            </div>

        </div>
    `;
}