import { state } from "./state.js";

import { profiles } from "./data/profiles.js";

export function addScore(answer) {
    for (const key in answer.points) {
        state.score[key] += answer.points[key];
    }
}

export function calculateResults() {
    const total = Object.values(state.score)
        .reduce((sum, value) => sum + value, 0);

    const results = profiles.map(profile => {
        const value = state.score[profile.id];

        return {
            ...profile,

            value,

            percent: total
                ? Math.round((value / total) * 100)
                : 0
        };
    });

    return results.sort(
        (a, b) => b.percent - a.percent
    );
}