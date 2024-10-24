function generateNumber(){

  let numberList = [];

  for(let i = 0; i < 5; i++){
    numberList.push(Math.floor(Math.random() * 100 + 1));
  }

  document.getElementById("random-number1").value = numberList[0];
  document.getElementById("random-number2").value = numberList[1];
  document.getElementById("random-number3").value = numberList[2];
  document.getElementById("random-number4").value = numberList[3];
  document.getElementById("random-number5").value = numberList[4];

  return numberList;
}

function check(){

  if(!endTimer) return;

  let guess = [];

  guess.push(parseInt(document.getElementById("random-number1").value));
  guess.push(parseInt(document.getElementById("random-number2").value));
  guess.push(parseInt(document.getElementById("random-number3").value));
  guess.push(parseInt(document.getElementById("random-number4").value));
  guess.push(parseInt(document.getElementById("random-number5").value));


  let output = "Hai indovinato i seguenti numeri: "

  for(let i = 0; i < 5; i++){

    if(numberList.includes(guess[i]))
      output += guess[i] + ", ";

  }
  
  document.getElementById("solution").innerText = output == "Hai indovinato i seguenti numeri: " ? "Non hai indovinato niente" : output; 

}


let numberList = generateNumber();
console.log(numberList);


let count = 30;

let endTimer = false;

const timer = setInterval(function() {
  count--;
  document.getElementById("countdown").innerText = count;
  if (count == 0) {
    endTimer = true;
    clearInterval(timer);
    document.getElementById("random-number1").value = "";
    document.getElementById("random-number2").value = "";
    document.getElementById("random-number3").value = "";
    document.getElementById("random-number4").value = "";
    document.getElementById("random-number5").value = "";
    }
}, 1000);


document.getElementById("restart").addEventListener("click", function() {
  location.reload();
});

document.getElementById("guess").addEventListener("click", check);
