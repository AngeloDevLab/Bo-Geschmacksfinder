const DATABASE_URL = "https://geschmackstracker-default-rtdb.europe-west1.firebasedatabase.app";
const STATS_URL = `${DATABASE_URL}/stats.json`;

export function trackPageVisit() {
    incrementCounter("page_visits");
}

export function trackQuizCompleted() {
    incrementCounter("quiz_completed");
}

export function trackCtaClicked() {
    incrementCounter("cta_clicked");
}

async function incrementCounter(counterName) {
    try {
        const stats = await getStats();
        const currentValue = stats[counterName] || 0;

        await updateStats({
            [counterName]: currentValue + 1
        });
    } catch (error) {
        console.warn("Tracking failed:", error);
    }
}

async function getStats() {
    const response = await fetch(STATS_URL);

    if (!response.ok) {
        throw new Error("Could not load tracking stats");
    }

    return await response.json();
}

async function updateStats(data) {
    const response = await fetch(STATS_URL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Could not update tracking stats");
    }
}