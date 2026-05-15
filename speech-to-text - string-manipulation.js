//DESCRIPTION:

// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

//SOLUTION:

const bot = {
  message(prompt) {
    // ADD: "Add 7 to 15."
    if (prompt.startsWith("Add")) {
      const [a, b] = prompt.match(/\d+/g).map(Number);
      return a + b;
    }

    // SUBTRACT: "Subtract 7 from 15."
    if (prompt.startsWith("Subtract")) {
      const [a, b] = prompt.match(/\d+/g).map(Number);
      return b - a;
    }

    // WEATHER: "What is the weather at 5:30pm?"
    if (prompt.includes("weather")) {
      const match = prompt.match(/(\d+)(?::(\d+))?(am|pm)/i);
      let [_, hours, minutes = "0", period] = match;

      hours = Number(hours);
      minutes = Number(minutes);

      // convert to 24h format
      if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
      if (period.toLowerCase() === "am" && hours === 12) hours = 0;

      const time = hours + minutes / 60;

      return time >= 6 && time <= 18 ? "sunny" : "raining";
    }
  }
};

console.log(bot.message("Add 7 to 15."))



// for input: "What is the weather at 12:30am?"
 
// : expected 'raining' to equal 'sunny'