// Importing the required module
const readline = require('readline');

// Creating interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the greetUser method
function greetUser(fname, lname) {
  return `Welcome, ${fname} ${lname}!`;
}

// Taking user input for first and last name
rl.question('Enter your first name: ', (fname) => {
  rl.question('Enter your last name: ', (lname) => {
    // Call the greetUser method with user input
    const welcomeMessage = greetUser(fname, lname);

    // Display the welcome message
    console.log(welcomeMessage);

    // Close the interface
    rl.close();
  });
});
