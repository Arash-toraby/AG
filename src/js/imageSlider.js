const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
const ParentContainer = document.getElementById("parent-container");

let counter = 0;
let intervalId;
const itemWidth = window.innerWidth >= 1024 ? 198 : 168;

const startScrolling = () => {
  console.log("start");
  intervalId = setInterval(() => {
    wrapper.style.transition = "0.5s ease-in-out all";
    counter -= itemWidth;
    wrapper.style.transform = `translateX(${counter}px)`;

    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      counter += itemWidth;
      wrapper.style.transform = `translateX(${counter}px)`;
    }, 500);
  }, 1000);
};

const stopScrolling = () => {
  clearInterval(intervalId);
  wrapper.style.transition = "none";
  wrapper.style.transform = `translateX(${counter}px)`;
};

ParentContainer.addEventListener("mouseenter", startScrolling);
ParentContainer.addEventListener("mouseleave", stopScrolling);

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("wrapper");
  const parentContainer = document.getElementById("parent-container");
  const grayPic = document.querySelector(".goldoon-div");

  let counter = 0;
  let intervalId;
  const itemWidth = window.innerWidth >= 1024 ? 198 : 168;

  const startScrolling = () => {
    console.log("start");
    intervalId = setInterval(() => {
      wrapper.style.transition = "0.5s ease-in-out all";
      counter -= itemWidth;
      wrapper.style.transform = `translateX(${counter}px)`;

      setTimeout(() => {
        wrapper.style.transition = "none";
        wrapper.appendChild(wrapper.firstElementChild);
        counter += itemWidth;
        wrapper.style.transform = `translateX(${counter}px)`;
      }, 500);
    }, 1000);
  };

  const stopScrolling = () => {
    clearInterval(intervalId);
    wrapper.style.transition = "none";
    wrapper.style.transform = `translateX(${counter}px)`;
  };

  if (window.innerWidth < 1024) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grayPic.style.display = "none";
            wrapper.style.opacity = 100;
            startScrolling();
          } else {
            grayPic.style.display = "block";
            wrapper.style.opacity = 0;
            stopScrolling();
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    observer.observe(parentContainer);
  }
});
