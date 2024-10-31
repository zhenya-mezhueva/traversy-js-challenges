function countVowels(str) {
    let counter = 0;
    let formatted = str.toLowerCase();
    for (ch of formatted) {
        if (
            ch === 'a' || 
            ch === "e" || 
            ch === "u" ||
            ch === "i" || 
            ch === "o"
        ) {
            counter++;
        }
    }
    return counter;
}

module.exports = countVowels;
