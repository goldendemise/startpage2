


//modify DOM
let dateDiv = document.querySelector('.date');
let hourSpan = document.querySelector('#hour');
let minuteSpan = document.querySelector('#minute');

//encapsulate updates in a function to run in settimeout
function updateMarkup() {
  const TODAY = new Date();
  let dayOfWeek = TODAY.getDay();
  let monthOfYear = TODAY.getMonth();
  let dayOfMonth = TODAY.getDate();
  let hour = TODAY.getHours();
  let minute = TODAY.getMinutes();

  //both day of week and month are zero indexed digits, creating arrays to properly display in human readable form
  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateDiv.innerHTML = weekday[dayOfWeek] + ", " + months[monthOfYear] + " " + dayOfMonth;
hourSpan.innerHTML = hour;
minuteSpan.innerHTML = ":" + minute;
cl("RAN");
}
updateMarkup();
let updateClock = setInterval(updateMarkup, 5000);

function cl(args) {
  console.log(args);
}
