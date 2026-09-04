function getVowelCount(sentence) {
    let count = 0;

    sentence = sentence.toLowerCase();
    
    for (const char of sentence) {
        if (char === "i") {
            count++
        } else if (char === "e") {
            count++
        } else if (char === "a") {
            count++
        } else if (char === "o") {
            count++
        } else if (char === "u") {
            count++
        }
    }
    return count;
}
const vowelCount = (getVowelCount("Apples are tasty fruits"))
console.log(`Vowel Count: ${vowelCount}`);



function getConsonantCount(sentence) {
    let count = 0;
    const vowels = "aeiou";
    const letters = "zxcvbnmasdfghjklqwertyuiop";

    sentence = sentence.toLowerCase();

    for (const char of sentence) {
        if (!vowels.includes(char) && letters.includes(char)) {
            count++
        }
    }
    return count;
}
const consonantCount = (getConsonantCount("Coding is fun"))
console.log(`Consonant Count: ${consonantCount}`)



function getPunctuationCount(sentence) {
    let count = 0;
    const letters = "zxcvbnmasdfghjklqwertyuiop";

    sentence = sentence.toLowerCase();
    sentence = sentence.replaceAll(" ","");

    for (const char of sentence) {
        if (!letters.includes(char)) {
            count++
        }
    }
    return count;
}
const punctuationCount = (getPunctuationCount("Coding... isn't fun!"))
console.log(`Punctuation Count: ${punctuationCount}`)



function getWordCount(sentence) {
    sentence = sentence.trim();

    if (sentence === "") {
        return 0;
    }

    sentence = sentence.split(" ");
    return sentence.length;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);