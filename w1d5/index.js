var chalk = require("chalk");

var message = chalk.bgRed.red("Well this is mysterious! " + chalk.bgGreen("This is a bit better..... \n"))  + chalk.blue("red, \n") + chalk.red("blue, \n ") + chalk.cyan("What happened there!?");
console.log(message);