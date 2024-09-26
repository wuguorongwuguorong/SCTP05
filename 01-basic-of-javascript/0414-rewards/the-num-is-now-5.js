const prompt =require("prompt-sync")();

function sumIntegers() {
    let sum = 0;
    let number;

    do {
        // Prompt the user to enter an integer
        number = parseInt(prompt("Enter an integer (enter -5 to stop): "), 10);
        
        // If the number is not -5, add it to the sum
        if (number !== -5) {
            sum += number;
        }
    } while (number !== -5);  // Continue looping until -5 is entered

    // Display the sum of the entered numbers
    console.log("The sum of all numbers entered is: " + sum);
}

// Call the function
sumIntegers();
