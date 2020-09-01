
let exp = document.getElementById('expression');

function calculate(button_name) {
  if (button_name == '=') {
    exp.value = eval(exp.value);
  }
  else if (button_name == 'ac') {
    exp.value = '';
  }
  else if (button_name == 'back') {
    let string = exp.value;
    exp.value = string.substring(0, string.length - 1);
  }
  else {
    exp.value = exp.value + button_name + '';
    document.getElementById('expression').value = exp.value;
  }
}

