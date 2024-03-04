function faktorial(n) {
  if (n === 0) {
      return 1;
  } else {
      return n * faktorial(n - 1);
  }
}
function hitungFaktorial() {
  let inputNumber = document.getElementById('inputNumber').value;
  let result = document.getElementById('result');

  if (inputNumber <= 0) {
      result.innerHTML = 'Input harus lebih dari 0';
  } else {
      result.innerHTML = 'Hasil faktorial dari ' + inputNumber + ' adalah: ' + faktorial(inputNumber);
  }
}
