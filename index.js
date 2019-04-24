/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (time) {
  let newtime = parseInt(time, 10);
  if (newtime < 12)
    return 'Good Morning'
  else if (newtime > 17)
    return 'Good Evening'
  else
    return 'Good Afternoon'
}

function displayMessage (text) {
  let greetText = document.getElementById('greeting')
  greetText.textContent = text;
}
