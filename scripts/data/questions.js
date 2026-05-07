export const questions = [
    {
        id: 1,
        type: "single",
        question: "Wie viel Zeit hast du fürs Kochen?",
        answers: [
            {
                text: "Sehr wenig (max. 10 Min)",
                points: {
                    fast: 2
                }
            },
            {
                text: "Normal (20-30 Min)",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Ich nehme mir gerne Zeit",
                points: {
                    premium: 2
                }
            }
        ]
    },

    {
        id: 2,
        type: "multiple",
        maxSelections: 2,
        question: "Was isst du am liebsten?",
        answers: [
            {
                text: "Klassisch & vertraut",
                points: {
                    comfort: 1
                }
            },
            {
                text: "Würzig & deftig",
                points: {
                    hearty: 1
                }
            },
            {
                text: "Leicht & frisch",
                points: {
                    healthy: 1
                }
            },
            {
                text: "Hochwertig / besonders",
                points: {
                    premium: 1
                }
            }
        ]
    },

    {
        id: 3,
        type: "single",
        question: "Wie sieht dein Alltag aus?",
        answers: [
            {
                text: "Viel Stress / wenig Zeit",
                points: {
                    fast: 2
                }
            },
            {
                text: "Ganz entspannt",
                points: {
                    comfort: 2
                }
            }
        ]
    },

    {
        id: 4,
        type: "single",
        question: "Für wie viele Personen kochst du meistens?",
        answers: [
            {
                text: "Nur für mich",
                points: {
                    fast: 1
                }
            },
            {
                text: "Familie",
                points: {
                    comfort: 1,
                    hearty: 1
                }
            },
            {
                text: "Gäste / besondere Anlässe",
                points: {
                    premium: 2
                }
            }
        ]
    },

    {
        id: 5,
        type: "single",
        question: "Wie wichtig ist dir gesunde Ernährung?",
        answers: [
            {
                text: "Sehr wichtig",
                points: {
                    healthy: 2
                }
            },
            {
                text: "Geht so",
                points: {
                    comfort: 1
                }
            },
            {
                text: "Eher egal - Hauptsache lecker",
                points: {
                    hearty: 2
                }
            }
        ]
    },

    {
        id: 6,
        type: "single",
        question: "Wie gerne kochst du?",
        answers: [
            {
                text: "Gar nicht",
                points: {
                    fast: 2
                }
            },
            {
                text: "Ist okay",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Macht mir Spaß",
                points: {
                    premium: 2
                }
            }
        ]
    },

    {
        id: 7,
        type: "single",
        question: "Wann brauchst du am häufigsten Essen?",
        answers: [
            {
                text: "Alltag / schnell zwischendurch",
                points: {
                    fast: 2
                }
            },
            {
                text: "Normale Mahlzeiten",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Besondere Momente",
                points: {
                    premium: 2
                }
            }
        ]
    },

    {
        id: 8,
        type: "single",
        question: "Was trifft eher auf dich zu?",
        answers: [
            {
                text: "Möglichst günstig",
                points: {
                    fast: 2
                }
            },
            {
                text: "Preis-Leistung passt",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Qualität ist wichtiger als Preis",
                points: {
                    premium: 2
                }
            }
        ]
    },

    {
        id: 9,
        type: "single",
        question: "Wie groß sind deine Portionen?",
        answers: [
            {
                text: "Eher klein / leicht",
                points: {
                    healthy: 2
                }
            },
            {
                text: "Normal",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Groß & deftig",
                points: {
                    hearty: 2
                }
            }
        ]
    },

    {
        id: 10,
        type: "single",
        question: "Wie fühlst du dich bei großer Auswahl?",
        answers: [
            {
                text: "Überfordert",
                points: {
                    fast: 2
                }
            },
            {
                text: "Alles gut",
                points: {
                    comfort: 2
                }
            },
            {
                text: "Ich suche gezielt Besonderes",
                points: {
                    premium: 2
                }
            }
        ]
    }
];