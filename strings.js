var numbers = [];
var count = 0;
var sum = 0;
var avg = 0;
var strings = 0;
var concat = 0;

function mathHappen(event) {
  var textarea = $("#textarea").val();
  var number = Number(textarea);
  if(!isNaN(number)) {
    numbers.push(count);
    sum += number;
    avg = sum/numbers.length;
    count = numbers.length;
  console.log(textarea);
  console.log(count);
  console.log(sum);
  console.log(avg);
  $( "#count" ).html(count);
  $( "#sum" ).html(sum);
  $( "avg" ).html(avg);
    
  } else {
    strings.push(textarea);
    $( "#strings" ).html(strings.length);
    console.log(strings.length);
    concat = concat + textarea;
    console.log(concat);
    $( "#concat" ).html(concat);
  }
  event.preventDefault();
}

function resetButton(event) {
  sum = 0;
  avg = 0;
  strings = [];
  concat = "";
  count = 0;
  numbers = [];
  console.log(sum);
  console.log(avg);
  event.preventDefault();
}