//DESCRIPTION:

// Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

//SOLUTION:

function stringParse(string){
    if (typeof(string) !== "string") {
        return "Please enter a valid string";
    }
    let result = "";
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            if (count > 2) {
                result += string[i].repeat(2) + "[" + string[i].repeat(count - 2) + "]";
            } else {
                result += string[i].repeat(count);
            }
            count = 1;
        }
    }
    return result;
}

console.log(stringParse("ffkkkkeyd"));
