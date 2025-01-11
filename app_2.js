document.addEventListener("DOMContentLoaded", function () {
  let count = 10;
  const interval = setInterval(function () {
    console.log(count--);
    if (count === 0) clearInterval(interval);
  }, 1000);
});