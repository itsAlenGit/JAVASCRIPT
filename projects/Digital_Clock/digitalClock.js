const clock = document.getElementById('clock');

const date = new Date();

setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
