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
    if(localTime === true) {
        displayHour.innerHTML = hour;
        // localTimeToggle.innerHTML = '24hr clock';
        displayhr.innerHTML = '24hr'
    } else {
        if (hour > 12) {
            let calculatedHour = hour - 12;
            if (calculatedHour < 10) {
                displayHour.innerHTML = '0' + calculatedHour;
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
    if (document.body.classList.contains('active')) {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
        displayTheme.innerHTML = "You are in Light Mode"
    } else {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        displayTheme.innerHTML = "You are in Dark Mode"
    }
}