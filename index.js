import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
    /* Pass your questions in here */{
            message: "Type in your URL: ",
            name: "URL"
        }])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;

        // Here you use the qr-code module code for generating the (qr-code image).
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr-image.png"));


        // Here you write a fs code for save the output
        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });