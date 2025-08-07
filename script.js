// Holding logic for love.html buttons
document.addEventListener("DOMContentLoaded", function () {
  const holdButtons = document.querySelectorAll(".hold-btn");

  holdButtons.forEach(btn => {
    let timer;
    btn.addEventListener("mousedown", () => {
      timer = setTimeout(() => {
        window.location.href = btn.getAttribute("data-target");
      }, 10000);
    });

    btn.addEventListener("mouseup", () => clearTimeout(timer));
    btn.addEventListener("mouseleave", () => clearTimeout(timer));
    btn.addEventListener("touchstart", () => {
      timer = setTimeout(() => {
        window.location.href = btn.getAttribute("data-target");
      }, 10000);
    }, { passive: true });

    btn.addEventListener("touchend", () => clearTimeout(timer));
  });
});

// Quote swapper for motivate.html
function swapQuote() {
  fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
      const quoteBox = document.getElementById("quoteBox");
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteBox.innerText = randomQuote;
    });
}
