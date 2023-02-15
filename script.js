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


const setAlarmButton = document.querySelector('.set-alarm-button');
const cancelAlarmbutton = document.querySelector('.cancel-alarm-button')


alarmRingtone = new Audio("./ringtones/alexa ringtone.mp3");


// time update
function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());
    const month = getMonth(date.getMonth());
    const day = getDay(date.getDay());
    const todayDate = formatTime(date.getDate());
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // 24hr /12hr toggle
    if (localTime) {
        displayHour.innerHTML = hour;
        // localTimeToggle.innerHTML = '24hr clock';
        displayhr.innerHTML = '24hr'
        if (calculatedHour == hourInput && minute == minuteInput && ampm == ampmInput) {
            alarmRingtone.play();
            alarmRingtone.loop = true;
        }
    } else {
        if (hour > 12) {
            var calculatedHour = hour - 12;
            if (calculatedHour < 10) {
                displayHour.innerHTML = '0' + calculatedHour;
                displayhr.innerHTML = '12hr'
            } else {
                displayHour.innerHTML = calculatedHour;
                // localTimeToggle.innerHTML = '12hr clock';
                displayhr.innerHTML = '12hr'
            }
            if (calculatedHour == hourInput && minute == minuteInput && ampm == ampmInput) {
                alarmRingtone.play();
                alarmRingtone.loop = true;
            }
        } else {
            displayHour.innerHTML = hour;
            displayhr.innerHTML = '12hr'
        }
        if (calculatedHour == hourInput && minute == minuteInput && ampm == ampmInput) {
            alarmRingtone.play();
            alarmRingtone.loop = true;
        }
    }

    // display clock
    displayMinute.innerHTML = minute;
    displaySecond.innerHTML = second;
    
    displayAmPm.innerHTML = ampm;
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
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthsArr[monthNumber];

}

// fetch the day
function getDay(dayNumber) {
    const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysArr[dayNumber];

}

// 24hr / 12hr toggle
let localTime = false;
localTimeToggle.onclick = function () {
    localTimeToggle.classList.toggle('active');
    localTime = !localTime;
    return localTime;
}

// dark / witch theme toggle
themeToggle.onclick = function () {
    themeToggle.classList.toggle('active');
    body.classList.toggle('active');
    displayTheme.classList.toggle('active');
    addAlarm.classList.toggle('alarm-dark');
    addAlarmDisplay.classList.toggle('dark');
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

addAlarm.onclick = function () {
    addAlarm.classList.toggle('active');
    setAlarm.classList.toggle('active');
    addAlarmDisplay.classList.toggle('active');
    if (addAlarm.classList.contains('active')) {
        addAlarmDisplay.innerHTML = "Cancel Alarm";
    } else if (setAlarmButton.classList.contains('active')) {
        addAlarmDisplay.innerHTML = "Show Set Alarm"
    }
    else {
        addAlarmDisplay.innerHTML = "Add Alarm"
    }
}

setAmPm.onclick = function () {
    const setAm = document.getElementById('set-am');
    const setPm = document.getElementById('set-pm');
    setAmPm.classList.toggle('unactive');
    if (setAmPm.classList.contains('unactive')) {
        setPm.style.color = "red";
        setPm.style.fontWeight = "600";
        setAm.style.fontWeight = "500";
        setAm.style.color = 'white';
    } else {
        setAm.style.color = "red";
        setAm.style.fontWeight = "600";
        setPm.style.fontWeight = "500";
        setPm.style.color = "white"
    }
}

// getting data to set alarm
var hourInput = document.getElementById('set-hour');
var minuteInput = document.getElementById('set-minute');

var ampmInput = 'AM';
setAlarmButton.onclick = function () {
    setAlarmButton.innerHTML = "Set Alarm";
    
    hourInput = hourInput.value;
    minuteInput = minuteInput.value;
    
    if (setAmPm.classList.contains('unactive')) {
        ampmInput = 'PM';
    } else {
        ampmInput = 'AM';
    }

    if (document.getElementById('set-hour').value === "" || document.getElementById('set-minute') === "") {
        alert("Please Set Hour and minute for Alarm");
    } else {
        
        setAlarmButton.classList.toggle('active');
        alarmTime = {hourInput, minuteInput, ampmInput};
        console.log(alarmTime);
        // setAlarmButton.style.width = "9vw";
        // cancelAlarmbutton.style.display = 'inline';

        if (setAlarmButton.classList.contains('active')) {
            setAlarmButton.innerHTML = "Cancel Alarm"
            if (setAlarmButton.classList.contains('active')) {
                if (addAlarm.classList.contains('active')) {
                    addAlarmDisplay.innerHTML = "Minimize"
                }
            }
        } else {
            setAlarmButton.innerHTML = "Set Alarm";
            alarmRingtone.pause();
        }
    }
}

    // cancelAlarmbutton.onclick = function() {
    //     cancelAlarmbutton.classList.add('active');
    //     setAlarmButton.classList.remove('active');
    //     if (cancelAlarmbutton.classList.contains('active')) {
    //         hourInput = null;
    //         minuteInput = null;
    //         ampmInput = null;
    //     }
    //     console.log(hourInput, minuteInput, ampmInput);
    // }


    // ring the alarm
