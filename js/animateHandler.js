const imageContainer = document.getElementById("image-container");

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  var elements = document.querySelectorAll(".image-container");
  elements.forEach((element) => {
    observer.observe(element);
  });
});
