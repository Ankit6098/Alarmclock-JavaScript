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

const alarmList = document.getElementById('alarm-list');
const deleteButton = document.getElementById('delete');

alarmRingtone = new Audio("./ringtones/alexa ringtone.mp3");

let alarmListArr = [];


// time update
function updateTime() {
    const date = new Date();
    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());
    const month = getMonth(date.getMonth());
    const day = getDay(date.getDay());
    const currentDate = formatTime(date.getDate());
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // 24hr /12hr toggle
    if (localTime) {
        displayHour.innerHTML = hour;
        displayhr.innerHTML = '24hr';
        // for(let i = 0; i < alarmListArr.length; i++) {
        //     if(alarmListArr[i].hourInput == hour && alarmListArr[i].minuteInput == minute && alarmListArr[i].secInput == second && alarmListArr[i].ampmInput == ampm) {
        //         console.log('alarm1');
        //         alarmRingtone.play();
        //         alarmListArr.splice(i, 1);
        //     }
        // }
    } else {
        if (hour > 12) {
            var calculatedHour = hour - 12;
            if (calculatedHour < 10) {
                displayHour.innerHTML = '0' + calculatedHour;
                displayhr.innerHTML = '12hr';
                for(let i = 0; i < alarmListArr.length; i++) {
                    if(alarmListArr[i].hourInput == calculatedHour && alarmListArr[i].minuteInput == minute && alarmListArr[i].secInput == second && alarmListArr[i].ampmInput == ampm) {
                        console.log('alarm1');
                        alarmRingtone.play();
                        alarmListArr.splice(i, 1);
                    }
                }
            } else {
                displayHour.innerHTML = calculatedHour;
                displayhr.innerHTML = '12hr';
                // for(let i = 0; i < alarmListArr.length; i++) {
                //     if(alarmListArr[i].hourInput == calculatedHour && alarmListArr[i].minuteInput == minute && alarmListArr[i].secInput == second && alarmListArr[i].ampmInput == ampm) {
                //         console.log('alarm1');
                //         alarmRingtone.play();
                //         alarmListArr.splice(i, 1);
                //     }
                // }
            }
        } else {
            displayHour.innerHTML = hour;
            displayhr.innerHTML = '12hr';
            // for(let i = 0; i < alarmListArr.length; i++) {
            //     if(alarmListArr[i].hourInput == hour && alarmListArr[i].minuteInput == minute && alarmListArr[i].secInput == second && alarmListArr[i].ampmInput == ampm) {
            //         console.log('alarm1');
            //         alarmRingtone.play();
            //         alarmListArr.splice(i, 1);
            //     }
            // }
        }
    }

    // display clock
    displayMinute.innerHTML = minute;
    displaySecond.innerHTML = second;
    displayAmPm.innerHTML = ampm;
    displayMonth.innerHTML = month;
    displayDay.innerHTML = day;
    displayDate.innerHTML = currentDate;
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



// dark / light theme toggle
themeToggle.onclick = function () {
    themeToggle.classList.toggle('active');
    body.classList.toggle('active');
    displayTheme.classList.toggle('active');
    addAlarm.classList.toggle('alarm-dark');
    addAlarmDisplay.classList.toggle('dark');
    setAlarm.classList.toggle('dark');
    addAlarm.classList.toggle('dark');
    if (document.body.classList.contains('active')) {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
        displayTheme.innerHTML = "You are in Light Mode";
    } else {
        themeToggle.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        displayTheme.innerHTML = "You are in Dark Mode";
    }
}



// add alarm button section
addAlarm.onclick = function () {
    addAlarm.classList.toggle('active');
    setAlarm.classList.toggle('active');
    addAlarmDisplay.classList.toggle('active');
    if (addAlarm.classList.contains('active')) {
        addAlarmDisplay.innerHTML = "hide";
    } else {
        addAlarmDisplay.innerHTML = "Add Alarm"
    }
}



// am-pm section
setAmPm.onclick = function () {
    const setAm = document.getElementById('set-am');
    const setPm = document.getElementById('set-pm');
    setAmPm.classList.toggle('unactive');
    if (body.classList.contains('active')) {
        if (setAmPm.classList.contains('unactive')) {
            setPm.style.color = "red";
            setPm.style.fontWeight = "600";
            setAm.style.fontWeight = "500";
            setAm.style.color = 'black';
        } else {
            setAm.style.color = "red";
            setAm.style.fontWeight = "600";
            setPm.style.fontWeight = "500";
            setPm.style.color = "black"
        }
    } else {
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
}



// getting data to set alarm
var hourInput = document.getElementById('set-hour');
var minuteInput = document.getElementById('set-minute');
var secInput = document.getElementById('set-sec');


var ampmInput = 'AM';
setAlarmButton.onclick = function () {
    console.log('set alarm button click');
    
    if (setAmPm.classList.contains('unactive')) {
        ampmInput = 'PM';
    } else {
        ampmInput = 'AM';
    }

    if (hourInput.value == "" || minuteInput.value == "" || secInput.value == "") {
        inputWarning();
    } else if (hourInput.value > 23 || minuteInput.value > 60 || secInput.value > 60 || hourInput.value < 0 || minuteInput.value < 0 || secInput.value < 0) {
        invalidInputWarning();
    } else {
        if (hourInput.value > 12) {
            hourInput.value = hourInput.value - 12;  
        }
        if (hourInput.value < 10) {
            hourInput.value = '0' + hourInput.value;
        }
        if (minuteInput.value < 10) {
            minuteInput.value = '0' + minuteInput.value;
        }
        alarmSetWarning();
        alarmTime = {   
                        hourInput : hourInput.value, 
                        minuteInput : minuteInput.value, 
                        secInput : secInput.value, 
                        ampmInput : ampmInput,
                        id : Date.now()
                    };

        alarmListArr.push(alarmTime);
        console.log(alarmTime);
        addAlarmList(alarmTime);

        hourInput.value = "";
        minuteInput.value = "";
        secInput.value = "";
    }
}



// alarm list section
function addAlarmList(alarmTime) {
    const li = document.createElement("list");
    li.innerHTML = `
        <div class="alarm-list-container">
            <div class="list">
                <div class = "alarm-info">
                <span class = list-hour-info>
                    ${alarmTime.hourInput}
                </span>
                <span class = "list-colon">:</span>
                <span class = list-minute-info>
                    ${alarmTime.minuteInput}
                </span>
                <span class = "list-colon">:</span>
                <span class = list-second-info>
                    ${alarmTime.secInput}
                </span>
                <span class = list-am-pm-info>
                    ${ampmInput}
                </span>
                </div>
            </div>
            <div class="delete-img" ${alarmTime.id}>
                <img src="https://cdn-icons-png.flaticon.com/512/3299/3299935.png" class="delete" id="delete" data-id="${alarmTime.id}"/>
            </div>
        </div>
        `;
    alarmList.append(li);
}



document.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.id == 'delete') {
        let dataid = e.target.dataset.id;
        console.log(dataid);
        deletebutton(dataid);
    }
});



// delete alarm button

function deletebutton(dataid) {
    console.log("Alarm Deleted!");
    let newAlarmList = alarmListArr.filter(function (alarmTime) {
        // console.log(alarmTime.id)
        return alarmTime.id !== Number(dataid);
    });
    alarmListArr = newAlarmList;
    renderList();
    alarmDeletedWarning();
}



// render alarm list

function renderList() {
    console.log('Item Rendered!');
    alarmList.innerHTML = '';
    for (let element of alarmListArr) {
        addAlarmList(element);
    }
}



// warning alaert
function alarmSetWarning() {
    setAlarmWarning = document.querySelector('.alarm-set-alert');
    setAlarmWarning.classList.toggle('active');

    closeSetAlarmWarning = document.querySelector('.close-set-alarm-button')
    closeSetAlarmWarning.onclick = function() {
        setAlarmWarning.classList.add('remove');
    }
}



function alarmDeletedWarning() {
    stopAlarmWarning = document.querySelector('.alarm-stop-alert');
    stopAlarmWarning.classList.toggle('active');

    closeStopAlarmWarning = document.querySelector('.close-stop-alarm-button')
    closeStopAlarmWarning.onclick = function() {
        stopAlarmWarning.classList.add('remove');
    }
}



function inputWarning() {
    inputAlarmWarning = document.querySelector('.alarm-input-alert');
    inputAlarmWarning.classList.toggle('active');

    closeInputAlarmWarning = document.querySelector('.close-input-alarm-button')
    closeInputAlarmWarning.onclick = function() {
        inputAlarmWarning.classList.toggle('active');
        inputAlarmWarning.style.tansition = "all 0.3s ease-in-out"
    }
}

function invalidInputWarning() {
    inputAlarmWarning = document.querySelector('.alarm-invalid-input-alert');
    inputAlarmWarning.classList.toggle('active');

    closeInputAlarmWarning = document.querySelector('.close-invalid-input-alarm-button')
    closeInputAlarmWarning.onclick = function() {
        inputAlarmWarning.classList.toggle('active');
        inputAlarmWarning.style.tansition = "all 0.3s ease-in-out"
    }
}
