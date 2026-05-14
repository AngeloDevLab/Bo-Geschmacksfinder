export function getResultsTemplate(topResult, results) {
    return `
        <div class="results-card">

            <div class="result-hero">

                <h1>
                    <img class="result-hero-icon" src="${topResult.icon}" alt="${topResult.name}">
                    ${topResult.name}
                </h1>

                <p class="result-percent">
                    Du bist zu
                    ${topResult.percent}%
                    ${topResult.name}
                </p>

            </div>

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

            <button id="cta-btn">
                ${topResult.ctaText}
            </button>

        </div>
    `;
}

function getBarTemplate(result) {
    return `
        <div class="result-bar-item">

            <div class="result-bar-header">
                <span>
                    <img class="profile-icon" src="${result.icon}" alt="${result.name}">
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