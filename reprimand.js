const negativeWords = ["awful", "bad", "terrible", "horrible", "worst", "nasty", 
    "unpleasant", "dreadful", "atrocious", "disappointing", 
    "unacceptable", "ineffective", "miserable", 
    "regretful", "annoying", "irritating", "frustrating", 
    "distressing", "unhelpful", "depressing", "negative", 
    "fearful", "pessimistic", "angry", "rubbish", "lonely", 
    "confused", "chaotic", "weak", "defeated", "lost", 
    "insufficient", "inadequate", "unhealthy", "broken", 
    "flawed", "ugly", "empty", "harsh", "cruel", 
    "unkind", "hostile", "bitter", "resentful", "discontent", 
    "futile", "hopeless", "shameful", "cowardly", "selfish", 
    "greedy", "dishonest", "guilty", "blameworthy", 
    "careless", "reckless", "critical", "scornful", 
    "spiteful", "malicious", "deceitful", "untrustworthy", 
    "invalid", "limited", "failed", "flawed", "nonsense", 
    "subpar", "declining", "stressed", "troublesome", 
    "burdensome", "treacherous", "disastrous", "unproductive", 
    "fruitless", "regrettable", "miserable", "unsatisfactory"
];

const reprimands = [
    "Your comment is inappropriate and does not contribute constructively to the discussion.",
    "We expect all participants to maintain a respectful tone; please revise your comment accordingly.",
    "Offensive language is not tolerated here. Please adhere to our community guidelines.",
    "Your comment violates our code of conduct. Kindly edit or remove it.",
    "Let's keep the conversation professional and focused on the issue at hand.",
    "Please keep your feedback respectful and relevant.",
    "This kind of language is not conducive to a productive discussion. Please refrain from using it.",
    "We value constructive feedback, but your comment crosses the line. Please be respectful.",
    "Your comment is not in line with our community standards. Please modify it.",
    "Please remember to be courteous and considerate in your comments."
];
  
const punctuations = ['.', ',', '!', '-'];

function isNegativeSentiment(issue) {
    issue = issue.toLowerCase();
    punctuations.forEach(p=>{
        issue = issue.replaceAll(p, "");
    });
    const text = new Set(issue.split(' '));
    for (const word of negativeWords){
        if (text.has(word)){
            return true;
        };
    };

    return false;
}


function getRandomOffensiveResponse() {
    return reprimands[Math.floor(Math.random() * reprimands.length)];
}

function makeRandomResponse(sender, message){
    let quoteMessage = message.split('\n');
    for (let i=0; i < quoteMessage.length; i++){
        quoteMessage[i] = "> "+quoteMessage[i];
    };
    const badCount = parseInt(2 * Math.random()) + 1;
    const rebuke = getRandomOffensiveResponse();
    const rebukeMessage = quoteMessage.join('\n')+
        `\n\n@${sender}\n` +
        rebuke +
        `\nYou have now made negative comments ${badCount} times. ` +
        "If you repeat this behaviour, disciplinary action would be taken";
    return rebukeMessage;

}

module.exports = {
    isNegativeSentiment,
    makeRandomResponse
};