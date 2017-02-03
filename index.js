



var guessBox = document.getElementById("guessBox");
var numberInput = document.getElementById("numberInput");
var guessBtn4 = document.querySelector("#guessBtn");
var highLow = document.getElementById("highLow");
var clearBtn = document.querySelector("#clearBtn4");
var reset = document.querySelector("#resetBtn");

var minNum = 1;
var maxNum = 100;
var random = Math.floor((Math.random() * maxNum) + 1) ;
console.log(random, "random");

function randomizer() {
  random = Math.floor((Math.random() * maxNum) + 1);
  console.log(random, "random");
}
function range() {
  var range = Math.min(Math.max(parseInt(guessBox.value, 10),1),100);
  console.log(range);
}

guessBtn4.addEventListener('click', function(){
 numberInput.innerText = guessBox.value
  if(guessBox.value > maxNum) {
    numberInput.innerText = " ";
    alert("Guess again between 1 - 100");
  } else if (guessBox.value < minNum){
    numberInput.innerText = " ";
    alert("Guess again between 1 - 100");
  }  else if(guessBox.value < random) {
    highLow.innerText="Your guess is too low";
  } else if (guessBox.value > random) {
    highLow.innerText = "Your guess is too high";
  } else {
    highLow.innerText = "BOOM!!";
    resetBtn.disabled = false;
  }
});

clearBtn.addEventListener('click', function(){
  guessBox.value = null;
  console.log(random);
  console.log(guessBox.value, "guessBox Value")
})

guessBox.addEventListener("keyup", function() {
  clearBtn.disabled = false;
  guessBtn.disabled = false;
  resetBtn.disabled = true;
  console.log("guess box")
})

resetBtn.addEventListener('click', function() {
  guessBtn.disabled = true;
  clearBtn4.disabled = true;
  resetBtn.disabled = true;
  guessBox.value = null;
  numberInput.innerText = "";
  highLow.innerText = "";
  randomizer();
  console.log(random);
})
