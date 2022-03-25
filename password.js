console.log("Welcome to Ian's password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fail = `
████▌▄▌▄▐▐▌█████
████▌▄▌▄▐▐▌▀████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`;

reader.question('Please enter a password:  ', function (password) {
  if (password.length < 10 && !password.includes('$')) {
    console.log(
      `FAILURE! Password needs to be at least 10 digits long & have a $ character.${fail}`
    );
  } else if (password.length > 10 && !password.includes('$')) {
    console.log(`FAILURE! Password needs a $ character.${fail}`);
  } else if (password.length < 10 && password.includes('$')) {
    console.log(
      `FAILURE! Password needs to be at least 10 digits long.${fail}`
    );
  } else {
    console.log(`Successfully created password!`);
  }
  reader.close();
});
