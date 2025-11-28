"use strict"
// DESCRIPTION:

// Instructions
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// ...and so on...

//SOLUTION:

function sing() {
    const result = [];
    for (let i = 99; i >= 0; i--) {
        let currentText;
        (i === 0) ? currentText = "No more bottles"
        : (i === 1) ? currentText = "1 bottle"
        : currentText = `${i} bottles`;

        let nextCount = i - 1;
        let nextText;

        (nextCount <= 0) ? nextText = "no more bottles"
        : (nextCount === 1) ? nextText = "1 bottle"
        : nextText = `${nextCount} bottles`;
        
        let line1;
        let line2;
        if (i === 0) {
            line1 = `${currentText} of beer on the wall, ${nextText} of beer.`;
            line2 = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
        } else {
            line1 = `${currentText} of beer on the wall, ${currentText} of beer.`;
            line2 = `Take one down and pass it around, ${nextText} of beer on the wall.`;
        }
        result.push(line1);
        result.push(line2);
    }
    return result;
};


console.log(sing());