// clock current
function time() {
  let day = new Date();
  let hour = day.getHours();
  let min = day.getMinutes();
  let sec = day.getSeconds();

  var zone = " AM";
  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    zone = " PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + zone;
  document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("clock").textContent = currentTime;

  if (alarmRing == currentTime) {
    console.log(`alarm Ringg ...  `);
  }
}

setInterval(time, 1000);

// set value hour, minutes, seconds

const selects = document.querySelectorAll("select");
const btn = document.querySelector("button");
const content = document.querySelector(".alarm");
let alarmRing;

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;

  let option = `<option value="${i}">${i}</option>`;
  selects[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 60; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;

  let option = `<option value="${i}">${i}</option>`;
  selects[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 60; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;

  let option = `<option value="${i}">${i}</option>`;
  selects[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let zone = i == 1 ? "AM" : "PM";

  let option = `<option value="${zone}">${zone}</option>`;
  selects[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

const setAlarm = () => {
  let time = `${selects[0].value}:${selects[1].value}:${selects[2].value} ${selects[3].value}`;

  if (
    time.includes("hour") ||
    time.includes("minute") ||
    time.includes("second") ||
    time.includes("zone")
  ) {
    console.log("chưa set time");
  }
  alarmRing = time;

  content.classList.add("disable");
  btn.innerText = " Clear Alarm";
};

btn.addEventListener("click", setAlarm);
