/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeSliced = time.slice(0,2)
  let timeInt = parseInt(timeSliced)
  if (timeInt < 12) {
    return "Good Morning"
  } else if (timeInt > 12 && timeInt < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(timeString) {
  let greetingH = document.getElementById('greeting')
  greetingH.textContent = timeString
}
