const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint based on the exported skill
app.post("/composite", (req, res) => {
    const issueDescription = req.body.issuedescription;

    const sentimentAnalysis = getSentiment(issueDescription);

    res.status(200).json({
        generated_text: sentimentAnalysis.text,
        generated_token_count: sentimentAnalysis.tokenCount,
        input_token_count: sentimentAnalysis.inputTokenCount,
        stop_reason: sentimentAnalysis.stopReason
    });
});

function getSentiment(text) {
    const positiveWords = ["good", "great", "amazing", "positive"];
    const negativeWords = ["awful", "bad", "terrible", "horrible", "worst", "nasty", 
        "unpleasant", "dreadful", "atrocious", "disappointing", 
        "unacceptable", "ineffective", "miserable", "painful", 
        "regretful", "annoying", "irritating", "frustrating", 
        "distressing", "unhelpful", "depressing", "negative", 
        "fearful", "pessimistic", "angry", "sad", "lonely", 
        "confused", "chaotic", "weak", "defeated", "lost", 
        "insufficient", "inadequate", "unhealthy", "broken", 
        "flawed", "ugly", "empty", "harsh", "cruel", 
        "unkind", "hostile", "bitter", "resentful", "discontent", 
        "futile", "hopeless", "shameful", "cowardly", "selfish", 
        "greedy", "dishonest", "guilty", "blameworthy", 
        "careless", "reckless", "critical", "scornful", 
        "spiteful", "malicious", "deceitful", "untrustworthy", 
        "invalid", "limited", "failed", "flawed", "unsatisfactory", 
        "subpar", "declining", "stressed", "troublesome", 
        "burdensome", "treacherous", "disastrous", "unproductive", 
        "fruitless", "regrettable", "miserable", "unsatisfactory"];
    
    const lowerText = text.toLowerCase();
    let sentimentScore = 0;

    negativeWords.forEach(word => {
        if (lowerText.includes(word)) sentimentScore--;
    });

    return {
        text: sentimentScore < 0 ? "Negative sentiment detected" : "Neutral or positive sentiment detected",
        tokenCount: lowerText.split(" ").length,
        inputTokenCount: lowerText.split(" ").length,
        stopReason: "Completed successfully"
    };
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
