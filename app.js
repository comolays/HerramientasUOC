document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const interval = setInterval(function () {
    console.log(count++);
    if (count === 10) clearInterval(interval);
  }, 1000);
});