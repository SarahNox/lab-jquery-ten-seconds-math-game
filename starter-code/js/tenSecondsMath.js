// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {
  this.secondsIncrement = 10;
  this.secondsLeft = 10;
  this.operators = 


};

function add(n1, n2){
  return n1 + n2;
}
function substract(n1, n2){
  return n1 - n2;
}
function multiply(n1, n2){
  return n1 * n2;
}
function divide(n1, n2){
  return n1 / n2;
}

var operations = {
    '+': function (a, b) {return a + b;},
    '-': function (a, b) {return a - b;},
    '/': function (a, b) {return a / b;},
    'x': function (a, b) {return a * b;}
};

var numbersN1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersN2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var variousFunction = [ add , substract, multiply, divide];
//
// function checked() {
//   if (document.getElementById("mathstuff").checked = true) {
//     variousFunction.push(add);
//     console.log(variousFunction);
//   }
// }

function selectorSelection() {
  var checksInput = document.getElementsByClassName("box");
  checksInputArray = [];
  for (var i= 0; i < checksInput.length; i++) {
    if (checksInput[i].checked === true) {
      checksInputArray.push(checksInput[i].id);
    }
  }
  return checksInputArray;
}

window.onload = function() {
var n1 = numbersN1[Math.floor(Math.random() * numbersN1.length)];
document.getElementById('num1').innerHTML = n1;
var randomFunction = variousFunction[Math.floor(Math.random() * variousFunction.length)];
document.getElementById('func').innerHTML = randomFunction;
var n2 = numbersN2[Math.floor(Math.random() * numbersN2.length)];
document.getElementById('num2').innerHTML = n2;
};

// var randomN1 = Math.floor(Math.random() * limit);
// var randomN2 = Math.floor(Math.random() * limit);
var isTimerOn = false;

function countdown() {
  if (!isTimerOn) {
    var isTimerOn = true;
    var timeleft = 10;
    var timer = setInterval(function(){
      timeleft--;
      document.getElementById("countdownOutput").innerHTML = timeleft + " seconds till you lose";
      if (timeleft <= 0) {
        clearInterval(timer);
        document.getElementById("countdownOutput").innerHTML = "LOOOOOOOSER";
      }
    },1000);
  }
}

function startGame(){
  // checkOperations
  window.onload = function() {
  var n1 = numbersN1[Math.floor(Math.random() * numbersN1.length)];
  document.getElementById('num1').innerHTML = n1;
  var randomFunction = variousFunction[Math.floor(Math.random() * variousFunction.length)];
  document.getElementById('func').innerHTML = randomFunction;
  var n2 = numbersN2[Math.floor(Math.random() * numbersN2.length)];
  document.getElementById('num2').innerHTML = n2;
  };

  // getRandomNumbers()
  // countdown()
    // if timer >=0
      // checkAnswer
    // else
      // finish
}

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
