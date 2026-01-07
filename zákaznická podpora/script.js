// 1. SEM VLOŽÍTE KLÍČ Z GROQ CONSOLE
const API_KEY = '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'; 

// ... v event listeneru pak změňte fetch takto:

const response = await fetch('https://api.groq.com/openai/v1/chat/completions', { // TATO URL SE MĚNÍ
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}` // Použije se váš klíč
    },
    body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Model, který je na Groqu zdarma
        messages: [
            { role: "system", content: "Jsi milý asistent zákaznické podpory. Odpovídej česky." },
            { role: "user", content: dotaz }
        ]
    })
});