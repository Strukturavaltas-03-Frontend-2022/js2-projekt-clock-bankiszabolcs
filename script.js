const clockEl = document.querySelector(".clock");

setInterval(() => {
  clockEl.textContent = `${new Date().toLocaleTimeString()}`;
}, 1000);
