var numbers = [];
var sum = 0;

function addNumber(event) {
  var formNumber = document.addForm.number.value;
  if(isNum(formNumber)) {
    var number = parseFloat(formNumber);
    numbers.push(number);
    sum += number;
  }
  updateResult();
  document.addForm.number.value = "";
  event.preventDefault();
}

function cleanAnswer() {
  document.addForm.number.value = "";
  numbers = [];
  sum = 0;
  updateResults();
  event.preventDefault();
}

function updateResults() {
  document.getElementById("count").innerHTML = numbers.length;
  document.getElementById("sum").innerHTML = sum;
  var average = sum/numbers.length;
  if(isNaN(average)) {
    average = 0;
  }
  document.getElementById("average").innerHTML = average;
}


//Looked at Tamara Riveria's code to get parseFloat, and to figure out how to find the average by using js