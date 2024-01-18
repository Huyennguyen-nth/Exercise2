// connecting
alert("Welcome to your exercise!");
var lbs = prompt("What is the weight in pounds (lbs)?")
var kilo = lbs * 0.454
alert("This is: "+kilo+" kilograms")
console.log("Conversion Completed")

// Use for loop, while loop to print out "hello" 5 times in console
// While loop
var x=0
while (x<5) {
    console.log("hello with while loop");
    x++
}
// For loop
for(var i=0; i<5; i++) {
    console.log('helllo with for loop')
}

// Use for loop, while loop to print out odd number from 1 to 25 in console
// While loop
var a = 1;
while (a<25) {
    if (a%2!==0) {
    console.log("odd number is "+a);
}
    a++
}
// For loop
for(var y=1; y<25; y++){
    if (y%2 !== 0) {
        console.log("odd number found by for loop is "+ y)
    }
}