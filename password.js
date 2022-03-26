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
  let hasSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt() >= 33 && password[i].charCodeAt() <= 48) {
      hasSpecialChar = true;
    }
  }
  if (password.length < 10 && hasSpecialChar === false) {
    console.log(
      `FAILURE! Password needs to be at least 10 digits long & have a special character character.${fail}`
    );
  } else if (password.length > 10 && hasSpecialChar === false) {
    console.log(`FAILURE! Password needs a special character.${fail}`);
  } else if (password.length < 10 && hasSpecialChar === true) {
    console.log(
      `FAILURE! Password needs to be at least 10 digits long.${fail}`
    );
  } else {
    console.log(`Successfully created password!`);
  }
  reader.close();
});
