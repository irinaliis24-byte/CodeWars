//DESCRIPTION:

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized, and remaining letters lowercased.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//SOLUTION:

function generateHashtag (str) {
    const words = str.trim().replace(/\s+/g, " ").split(" ");
    if (!str.trim()) return false;

    const capWords = [];
    for (const word of words) {
        capWords.push(word[0].toUpperCase() + word.slice(1));
    }
    const result = "#" + capWords.join("");
    return (result.length > 140) ? false : result; 
}