document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter-value");
  document.querySelectorAll(".firstrow").forEach((container) => {
    if (container.children.length > 1) {
      container.insertBefore(container.lastElementChild, container.firstElementChild);
    }
  });

  counters.forEach(function (counter) {
    const target = parseInt(counter.textContent);
    const start = 0;
    const duration = 1000;
    const startTime = performance.now();

    function animateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.ceil(progress * target);
      counter.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    }
    requestAnimationFrame(animateCounter);
  });
});




