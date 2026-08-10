let age = Number(prompt("Enter your age"));
let week = prompt("Is it weekday: Yes/No");
week = week.toUpperCase();

const movieTicketPricer = (age, week) =>{
    if(age <= 12 && week === "NO" ){
        console.log("You have a discount applied");
    } else if(age <= 12 && week === "YES"){
        console.log("There's no discount for you");
    } else if (age >= 70 && week === "NO"){
        console.log("You have discount applied to your ticket");
    } else if (age >= 70 && week === "YES"){
        console.log("Sorry sir, no discount for you today");
    } else{
        console.log("Regular charges applied");
    }
}
const result = movieTicketPricer(age, week);
console.log(result);