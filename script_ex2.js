var firstname = prompt("Hello and Welcome. Please enter your first name:")
var lastname = prompt("Please enter your Last Name:")
var age = prompt("How old are you?")
var height  = prompt("How tall are you in centimeters?")
var petname = prompt("What is the name of your pet?")
alert("Thank you so much for the information.")

// 4 conditions
var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;
// name condition
if (firstname[0] === lastname[0]) {
    namecond = true;
}else {
        namecond = false;
    }
// age condition
if (age > 20 && age < 30) {
    agecond = true;
}else {
    agecond = false;
}
// height condition
if (height >= 170) {
    heightcond = true;
}else {
    heightcond = false;
}
// petname condition
if (petname[petname.length-1] === "y") {
    petcond = true;
}else {
    petcond = false;
}
// all conditions
if (namecond === true && agecond === true && heightcond && petcond) {
    console.log("Welcome Comrade! You've passed the spy test")
}else {
    console.log("Sorry, nothing to see here")
}