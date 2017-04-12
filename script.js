var numbers = [];
var sum = 0;
var avg = 0;

function addNumber(event) {
  var formNumber = document.addForm.formNumber.value;
  var number = Number(formNumber);
  if(isNaN(number)) {
    inputs.push(number);
    sum += number;
    avg = sum/inputs.length;
    document.getElementById("count").innerHTML = inputs.length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;
    console.log(numbers);
    console.log(sum);
    console.log(avg);
  }
  event.preventDefault();
}

function resetButton(event) {
  sum = 0;
  avg = 0;
  numbers = {};
}