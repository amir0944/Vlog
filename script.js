// menu
const flash = document.querySelector("#flash");
const menu = document.querySelector("#menu");

document.querySelector("#menuBtn").addEventListener("click", () => {
  menu.classList.toggle("active");
});

// scroll to top
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 120) {
    flash.style.opacity = 1;
  } else if (window.scrollY <= 120) {
    flash.style.opacity = 0;
  }
});

flash.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// chart
let start = 100;
let end = 0;
let startCounter = false;
const divElem = document.querySelector(".div");
const divItems = document.querySelectorAll(".divItemChart");
const divTitle = document.querySelector(".divTitle");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1800) {
    if (!startCounter) {
      divItems.forEach((item) => setInFNC(item.dataset.count, item));
      // console.log(divItems);
    }
    startCounter = true;
  }
});

function setInFNC(counter, divElem) {
  start = 100;
  end = 0;
  let counterInterval = setInterval(() => {
    if (end >= counter) {
      clearInterval(counterInterval);
    }

    divElem.style.backgroundImage = `conic-gradient(black ${start}%,#ff0066 0%, #ff0066 ${end}%)`;
    divElem.children[0].children[0].innerHTML = `${end}`;
    start--;
    end++;
  }, 100);
}
// scroll
const scrollElem = document.querySelector("#scroll");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollValue = Math.floor(
    (scrollTop / (documentHeight - windowHeight)) * 100
  );

  scrollElem.style.width = scrollValue + "%";
});
console.log("hello");
