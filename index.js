/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function makeHourToNumber(timeString) {
  let array = timeString.split(":")
  return parseInt(array[0], 10)
}



function greet(timeString) {
  let timeNumber = makeHourToNumber(timeString)
  if (timeNumber < 12) {
    return "Good Morning"
  } else if (timeNumber < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting')
  greeting.textContent = message
}
