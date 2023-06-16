// const callback = function (entries) {
//   console.log(entries);
//   entries.forEach((entry) => {
//     if (!entry.target.classList.contains("is-visible")) {
//       entry.target.classList.add("is-visible");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".show-on-scroll");
// targets.forEach(function (target) {
//   observer.observe(target);
// });

const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

loop();
