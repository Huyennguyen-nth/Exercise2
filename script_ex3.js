// Function
// Problem 1: SLEEPING IN
function sleepIn(weekday, vacation) {
    return(!weekday || vacation)
}
// Problem 2: MONKEY TROUBLE
function monkeyTrouble(aSmile, bSmile) {
    return(aSmile && bSmile) || (!aSmile && !bSmile)
}
// Problem 3: STRING TIMES
function stringTimes(str, n) {
    var String = "";
    var i = 0;
    while(i<n) {
        String += str
        i++
    }
    return String
}
// Problem 4: LUCKY SUM
function luckySum(a, b, c) {
    if (a === 13) {
        return 0
    }else if (b === 13) {
        return a
    }else if (c === 13) {
        return a + b
    }else {
        return a + b + c
    }
}
// Problem 5: CAUGHT SPEEDING
function caught_speeding(speed, is_birthday) {
    if (is_birthday) {
        speed -=5
    }
    if (speed <= 60) {
        return 0
    }else if (60 < speed <=80) {
        return 1
    }else {
        return 2
    }
}
// Problem 6: MAKE BRICKS
function makeBricks(small, big, goal) {
    return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal;
}

// Array
// var roster = []
// function add() {
//     var newName = prompt("What name would you like to add?")
//     roster.push(newName)
// }
// function remove() {
//     var remName = prompt("What name would you like to remove?")
//     var index = roster.indexOf(remName);
//     roster.splice(index,1)
// }
// function display() {
//     console.log(roster);
// }
// var start = prompt("Would you like to start the roster web app? y/n")
// var request = "empty"
// if (start === 'y') {
//     while (request !== "quit") {
//         request = prompt("Please select an action: add, remove, display, or quit.")
//         if (request === 'add') {
//             add();
//         }else if (request === 'remove') {
//             remove();
//         }else if(request === 'display') {
//             display();
//         }else {
//             alert("Not recognized")
//         }
//     }
// }
// alert("Thanks for using the web app! Please refresh to start over!")

// Object
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength:function() {
        console.log(employee['name'].length)
    },
    report:function() {
        alert("Name is "+this.name+", Job is "+this.job+". Age is "+this.age)
        // console.log("Name is "+this.name, " Job is "+this.job, "Age is "+this.age)
    }
    lastName:function(){
        console.log(this.name.split(" ")[1])
    }
}

