var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = 'black'
  }
  while (currentNumber == 10) {
    return (currentNumber = 0)
  }
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  }
  while (currentNumber == -10) {
    return (currentNumber = 0)
  }
}
