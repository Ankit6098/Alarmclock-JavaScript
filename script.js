const displayHour = document.querySelector('.hour');
const displayMinute = document.querySelector('.minute');
const displaySecond = document.querySelector('.second');
const displayAmPm = document.querySelector('.am-pm');
const displayMonth = document.querySelector('.month');
const displayDay = document.querySelector('.day');
const displayDate = document.querySelector('.date');
const localTimeToggle = document.querySelector('.local-time-toggle-button');
const themeToggle = document.querySelector('.theme-image');
const body = document.getElementsByTagName('body')[0];
const displayTheme = document.querySelector('.display-theme');
const displayhr = document.querySelector('.display-hr');
const addAlarm = document.querySelector('.add-img');
const addAlarmDisplay = document.querySelector('.display-add-alarm');
const setAlarm = document.querySelector('.set-alarm');
const setAmPm = document.getElementById('set-am-pm')
const setAm = document.getElementById('set-am');
const setPm = document.getElementById('set-pm');
const hourInput = document.getElementById('set-hour');

// time update
function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());
    const month = getMonth(date.getMonth());
    const day = getDay(date.getDay());
    const todayDate = formatTime(date.getDate());

    // 24hr /12hr toggle
    if(localTime) {
        displayHour.innerHTML = hour;
        // localTimeToggle.innerHTML = '24hr clock';
        displayhr.innerHTML = '24hr'
    } else {
        if (hour > 12) {
            let calculatedHour = hour - 12;
            if (calculatedHour < 10) {
                displayHour.innerHTML = '0' + calculatedHour;
                displayhr.innerHTML = '12hr'
            } else {
                displayHour.innerHTML = calculatedHour;
                // localTimeToggle.innerHTML = '12hr clock';
                displayhr.innerHTML = '12hr'
            }
        } else {
            displayHour.innerHTML = hour;
            displayhr.innerHTML = '12hr'
        }
    }
    
    // display clock
    displayMinute.innerHTML = minute;
    displaySecond.innerHTML = second;
    displayAmPm.innerHTML = hour >= 12 ? 'PM' : 'AM';
    displayMonth.innerHTML = month;
    displayDay.innerHTML = day;
    displayDate.innerHTML = todayDate;
}

setInterval(updateTime, 1000);

// timeformate
function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

// fetch the month
function getMonth(monthNumber) {
    const monthsArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return monthsArr[monthNumber];
    
}

// fetch the day
function getDay(dayNumber) {
    const daysArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return daysArr[dayNumber];
    
}

// 24hr / 12hr toggle
let localTime = false;
localTimeToggle.onclick = function() {
    localTimeToggle.classList.toggle('active');
    localTime = !localTime;
    return localTime;
}

// dark / witch theme toggle
themeToggle.onclick = function() {
    themeToggle.classList.toggle('active');
    body.classList.toggle('active');
    displayTheme.classList.toggle('active');
    addAlarm.classList.toggle('alarm-dark');
    addAlarmDisplay.classList.toggle('active');
    setAlarm.classList.toggle('dark')
    if (document.body.classList.contains('active')) {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
        displayTheme.innerHTML = "You are in Light Mode";
    } else {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        displayTheme.innerHTML = "You are in Dark Mode";
    }
}

// alarm

addAlarm.onclick = function() {
    addAlarm.classList.toggle('active');
    setAlarm.classList.toggle('active');
}

// setPm.onclick = function() {
//     setAm.classList.remove('active');
//     setAm.classList.add('unactive');
//     setPm.classList.remove('unactive')
//     setPm.classList.add('active');
// }

// setAm.onclick = function() {
//     setAm.classList.remove('unactive');
//     setAm.classList.add('active');
//     setPm.classList.remove('active')
//     setPm.classList.add('unactive');
// }

let amPm = true;
setAmPm.onclick = function() {
    setPm.classList.toggle('active');
    amPm = !amPm;
    console.log(amPm);
    return amPm;
}

if (amPm) {
    setAm.style.color = "red";
    setPm.style.color = "white";
} else {
    setAm.style.color = "white"; 
    setPm.style.color = "red";
}




// getting data to set alarm

hourInput.get