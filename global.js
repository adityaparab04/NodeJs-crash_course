//global object
//console statement
console.log("Not in timeout");

setTimeout(() => {
    console.log("In timeout");
    clearInterval(int); //clear the setInterval
}, 4000);

const int = setInterval(() => {
    console.log("Every 1 second"); //print every one second
}, 1000);

console.log(__dirname);   //for directory name of the current file
console.log(__filename);  //for directory name along with current file name

console.log(document.querySelector); // cannot do this as global doesn't work like window