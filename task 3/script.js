const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let current = '';
let operator = '';
let operand = '';
let resultDisplayed = false;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (btn.id === 'clear') {
      current = '';
      operator = '';
      operand = '';
      display.textContent = '0';
      resultDisplayed = false;
    } else if (btn.id === 'equals') {
      try {
        let res = eval(current);
        display.textContent = res;
        current = res.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        current = '';
      }
    } else {
      if (resultDisplayed && !isNaN(value)) {
        current = '';
        resultDisplayed = false;
      }
      current += value;
      display.textContent = current;
    }
  });
});