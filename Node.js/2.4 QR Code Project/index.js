/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Require the inquirer npm package
import inquirer from "inquirer";
// Require the qr-image npm package
import qr from "qr-image";
// Require the fs node module
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err; // Throw an error if there is one
      console.log("The file has been saved!"); // Log a message to the console  
    }); // End of fs.writeFile
  }) // End of .then
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    } // End of if/else statement 
  })