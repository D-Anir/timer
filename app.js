const coutnDown = () => {
  const countDate = new Date("May 31, 2021 00:00:00").getTime();
  const now = new Date().getTime();

  const gap = countDate - now;

  //   console.log(gap);

  // time parameters
  const seconds = 1000; //ms
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  //   calculate the times
  const returnDays = Math.floor(gap / days);
  const returnHours = Math.floor((gap % days) / hours);
  const returnMinutes = Math.floor((gap % hours) / minutes);
  const returnSeconds = Math.floor((gap % minutes) / seconds);

  // changing original html
  document.getElementById("day").innerText = returnDays;
  document.getElementById("hour").innerText = returnHours;
  document.getElementById("minute").innerText = returnMinutes;
  document.getElementById("second").innerText = returnSeconds;
  //   console.log(gap);
};

setInterval(coutnDown, 1000);
