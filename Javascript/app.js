let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let dateNow = document.querySelector('.create-date')


const newYearDate = new Date("September 25 , 2023 24:00:00").getTime();
updateCountDown();
displayDate();

var currentdate = new Date();
var datetime = + currentdate.getDate() + " "
    + (currentdate.getMonth() + 1) + " "
    + currentdate.getFullYear()
// + currentdate.getHours() + ":"  
// + currentdate.getMinutes() + ":" 
// + currentdate.getSeconds();

function displayDate() {

    dateNow.innerHTML = datetime;
    setTimeout(displayDate, 1000)

}
function updateCountDown() {
    const now = new Date().getTime();
    const remaining = newYearDate - now;
    const totalSeconds = 1000;
    const totalMinutes = totalSeconds * 60;
    const totalHours = totalMinutes * 60;
    const totalDays = totalHours * 24;

    const remainingDays = Math.floor(remaining / totalDays);
    const remainingHours = Math.floor((remaining % totalDays) / totalHours);
    const remainingMinutes = Math.floor((remaining % totalHours) / totalMinutes);
    const remainingSeconds = Math.floor((remaining % totalMinutes) / totalSeconds);

    days.innerText = remainingDays;
    hours.innerText = remainingHours;
    minutes.innerText = remainingMinutes;
    seconds.innerText = remainingSeconds;

    setTimeout(updateCountDown, 1000)

    if (remainingSeconds <= 0 && remainingHours <= 0 && remainingMinutes <= 0 && remainingSeconds <= 0) {
        window.location = 'https://hbd-anisha.netlify.app/'
    }
}
