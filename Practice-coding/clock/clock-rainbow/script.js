setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day_night = "AM";
  if (hour == 0) {
    hour == 12;
  }

  if (hour > 12) {
    hour -= 12;
    day_night = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  time = hour + ":" + minute + ":" + second + ":" + day_night;

  const t = document.getElementById("timer");
  t.textContent = time;
});
