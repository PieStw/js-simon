function generateNumber(){

  let numberList = [];

  for(let i = 0; i < 5; i++){
    numberList.push(Math.floor(Math.random() * 100 + 1));
  }

  document.getElementById("random-number1").innerText = numberList[0];
  document.getElementById("random-number2").innerText = numberList[1];
  document.getElementById("random-number3").innerText = numberList[2];
  document.getElementById("random-number4").innerText = numberList[3];
  document.getElementById("random-number5").innerText = numberList[4];

  return numberList;

}



let numberList = generateNumber();
console.log(numberList);