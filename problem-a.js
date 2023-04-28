//Write a function that determines if a string starts with an upper-case letter A-Z

let str = "hello";

let firstChar = str.substring(0,1);
let convertedChar = firstChar.toUpperCase();

if(firstChar === convertedChar){
    console.log("The first character is in Upper Case");
}else{
    console.log("The first character is in Lower Case");
}