// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

//SOLUTION:

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = (seconds - hours * 3600) - minutes * 60;
    function format(x) {
        return (x < 10) ? `0${x}` : x;
    }
    return `${format(hours)}:${format(minutes)}:${format(sec)}`
}

console.log(humanReadable(359999));