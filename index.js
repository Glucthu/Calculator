let num1 = 0, num2 = 0, operator;

document.getElementById("bar-content").disabled = true;

function insertNumber(num) {
  if(document.getElementById("bar-content").value != "0") {
    document.getElementById("bar-content").value += num;
  } else {
    if(num != 0) {
      document.getElementById("bar-content").value = num;
    }
  }
}

function insertOperator(op) {
  switch(op) {
    case "+":
    case "-":
    case "*":
    case "/":
      num1 = document.getElementById("bar-content").value;
      operator = op;
      document.getElementById("bar-content").value = "";
      break;
    
    case ".":
      document.getElementById("bar-content").value += op;
      break;

    case "C":
      document.getElementById("bar-content").value = "";
      break;

    case "=":
      num2 = document.getElementById("bar-content").value;
      switch(operator) {
        case "+":
          document.getElementById("bar-content").value = Number(num1) + Number(num2);
          break;
        case "-":
          document.getElementById("bar-content").value = Number(num1) - Number(num2);
          break;
        case "*":
          document.getElementById("bar-content").value = Number(num1) * Number(num2);
          break;
        case "/":
          document.getElementById("bar-content").value = Number(num1) / Number(num2);
          break;
      }
      break;
  }
}