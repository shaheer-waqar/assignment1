//qyestion 1
// let dObj = new Date();

//question 2

// let dObj = new Date();
// let tSring = dObj.toString();
// console.log(tSring);

//question 3 

// let d = new Date();
// let day =d.getDay() 
// console.log(day);

//question 4

// let d = new Date();
// let dayArray = d.getDay();
// let dayName = ["sunday","Monday","Tuesday","WednesDay","ThursDay","Friday","Saturday"]
// alert(dayName[dayArray]);

// question 5

// let d = new Date();
// let  year = d.getFullYear();
// let month = d.getMonth() +1 ;
// let date = d.getDate();
// let time = d.getHours();
// let minute = d.getMinutes();

// console.log(year,month,date,time,minute);

// question 6

// let later = new Date("12-01-2020")
// console.log(later);

// question 7 /8

// let nineTwo = new Date("02-02-1992").getTime();
// console.log(nineTwo);

// (question 9)

// let myDate = new Date();
// myDate.setFullYear(2023);

// console.log(myDate);

// (Question 10)

// function changeDateFab(inputDate){
//     let updateDate = new Date(inputDate);
//     updateDate.setMonth(1);

//     return updateDate
// }

// let myDate = new Date();
// let updateDate = changeDateFab(new Date);

// console.log (`actual date ${myDate}`)
// console.log(updateDate);

// (Question 11)
// function changeMinutesOfTime() {
//     // Get the time as a string from the user
//     var originalTime = prompt("Enter a time (HH:MM format):");

//     // Validate the time format
//     var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
//     if (!timeRegex.test(originalTime)) {
//         alert("Invalid time format. Please enter time in HH:MM format.");
//         return;
//     }

//     // Extract hours and minutes
//     var [hours, minutes] = originalTime.split(':');

//     // Prompt the user for the new minute value
//     var newMinutes = prompt("Enter the new minute value:");

//     // Validate the new minute value
//     if (isNaN(newMinutes) || newMinutes < 0 || newMinutes >= 60) {
//         alert("Invalid minute value. Please enter a valid minute value (0-59).");
//         return;
//     }

//     // Update the minutes and format the new time
//     var updatedTime = hours + ':' + (newMinutes < 10 ? '0' : '') + newMinutes;

//     // Display the updated time
//     alert("Original time: " + originalTime + "\nUpdated time: " + updatedTime);

//     // Return the updated time
//     return updatedTime;
// }

// // Example usage
// var updatedTime = changeMinutesOfTime();
// console.log("Updated time:", updatedTime);

  // (question 2) Code a function named askName that prompts the user to "Enter
//    name" and assigns the answer to userName, which hasn't been declared beforehand.

// function askname(name){
//     userName = name;
//     return userName;
// }
// let final = askname(prompt("enter your Name"));
// console.log(`Your name is ${final}`);

   //(Question 3) Code a function that calls 2 other functions.

// function mainFunstion(){
//     let first  = firstFunction();
//     let second = secondFunction();
// }
// function firstFunction(){
//     console.log("it's a first fuunction ");
// }
// function secondFunction(){
//     console.log("it's a seconf function");
// }
// mainFunstion();

   //(Question 4) Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

// function nameAlert(askname){
//     let userName = askname;
//     return userName;
// }
// let final = nameAlert(prompt("Enter your Name"));
// alert(`Hello ${final}`)

//  (Question 5) Code the first line of a function named concat that has 3parameters,
//  the first three letters of the alphabet. Call that takesa variable,
//  a string, and a number as argum
// function concat(a,b,c){
//     console.log(a,b,c)
    
// }
// let variableA = "Hello";
// let stringB   = "World";
// let numC = 2024;

// concat(variableA,stringB,numC);

// // (Question 6 ) Code a function that has 2 parameters. Concatenate them and
// // assign the result to a variable that hasn't been declared
// // beforehand.

// function funcConcat(para1,para2){
//     let merge = para1 + para2
//     return merge
// }
// let finalA = funcConcat("Hello", "World");
// alert(final);

// // (Question 7)Code a function that has three parameters. Multiply them and
// // assign them to a variable that hasn't been declared yet.

// function multi(first,sec,third){
//     let result = first * sec * third;
//     return result;
// }
// let final= multi(2,2,2);
// console.log(final);

//(Question 12) Write a function which tells letter counts of (word).

// function letCount(){
//     let input = prompt("Enter a word")
//     let result = input.split("").length
//     return result;
// }
// alert(letCount());

//(Question 15) Write a function which tells the presense of (word) in an array

// function wordCheck(askName){
//     let arryword = ["hassan","raza","ali","imran"]
//     for( let i = 0; i < arryword.length; i++){
//         if (arryword [i] === askName){
//             return true;
//         } 
//     }
//     return false;
// }
// console.log(wordCheck(prompt("enter")));

//(Question 16) Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)

// function lettRepeat(letter){
//     let strRepeat = letter.repeat(10);

//     return strRepeat;
// }
// console.log(lettRepeat("word"));

//(Question 17) write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()

// function ArrayReverse(){
//     let arryValue = ["a","b","c","d"]
//     console.log(arryValue);
//     let updatedArry = arryValue.reverse();
    
//     return updatedArry;
// }
// console.log(ArrayReverse());

//(Quesstion 18)Write a JavaScript function that reverses a number.Example x = 32243;Expected Output : 34223

// function numReverse(){
//     let numValue = 12345;
//     console.log(numValue);
    
//     let numReverse = numValue.toString().split("").reverse().join("");

//     return numReverse;
// }
// console.log(numReverse());

//(Question 19) Write a JavaScript function that checks whether a passed string is a palindrome or not?

// function Checkpalin(value){
//     let starValue = value.split("").reverse().join("");
//     if (starValue === value){
//         alert(`${value} is a Palindrome` )
//     }else{
//         alert(`${value} is'nt a Palindrome` )
//     }
// }
// console.log(Checkpalin(prompt("Enter a word to check whether it's a palindrome or not")));

// (Question 20)Write a JavaScript function that accepts a string as a
//parameter and converts the first letter of each word into uppercase.

function capitalize(){
    let firstText = "tHe BRown quIck"
    console.log(firstText);
    let toArr = firstText.split(" ");

    for (let i = 0; i < toArr.length; i++){
        toArr [i] = toArr[i].slice(0,1).toUpperCase() + toArr[i].slice(1).toLowerCase();
    }
    toArr = toArr.join(" ");

    console.log(toArr);
}

capitalize();
