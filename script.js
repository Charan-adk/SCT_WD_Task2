const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      display.value += value;
    }
  });
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
});

document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});

document.getElementById('backspace').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

document.addEventListener('keydown', (event) => {
  if (
    (event.key >= '0' && event.key <= '9') ||
    ['+', '-', '*', '/', '.', '(', ')'].includes(event.key)
  ) {
    display.value += event.key;
  } else if (event.key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (event.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (event.key === 'Escape') {
    display.value = '';
  }
});