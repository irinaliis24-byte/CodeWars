//DESCRIPTION:
// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

// For example, given width = 3 and height = 3:

// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.

// Note: You may assume that width and height will always be greater than zero.

//SOLUTION:

function getRectangleString(width, height) {
    let character = "*";
    let firstAndLastRow = character.repeat(width) + "\r\n";
    if (height === 1) return firstAndLastRow;
    if (width === 1) return (character + "\r\n").repeat(height);
    let rows = character + " ".repeat(width - 2) + character + "\r\n";
    return firstAndLastRow + rows.repeat(height - 2) + firstAndLastRow;
}

console.log(getRectangleString(4, 4));