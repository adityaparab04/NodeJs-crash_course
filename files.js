const fs = require("fs");
//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

//writing files
// fs.writeFile('./docs/blog1.txt', 'hello, anuja', () => {
//     console.log("File was written");
// });

// fs.writeFile('./docs/blog2.txt', 'hello, aditya', () => {
//     console.log("File was written");
// });

//directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log("assets folder created");
//     });
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }
//deleting files
if (fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log("File deleted");
    })
}