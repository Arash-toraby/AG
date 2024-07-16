const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");

let counter = 0;
let intervalId;

const itemWidth = window.innerWidth > 1024 ? 208 : 168; // Assuming each image has a width of 170px including gap

const startScrolling = () => {
  console.log("start");
  intervalId = setInterval(() => {
    wrapper.style.transition = "0.5s ease-in-out all"; // Reduced transition duration
    counter -= itemWidth; // Move to the left
    wrapper.style.transform = `translateX(${counter}px)`;

    // Append the first child to the end to maintain the infinite loop
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild); // Move the first item to the end
      counter += itemWidth; // Adjust counter back by one item's width
      wrapper.style.transform = `translateX(${counter}px)`;
    }, 500); // Match the reduced duration of the transition
  }, 1000); // Reduced interval time
};

const stopScrolling = () => {
  clearInterval(intervalId);
  wrapper.style.transition = "none";
  wrapper.style.transform = `translateX(${counter}px)`;
};

container.addEventListener("mouseenter", startScrolling);
container.addEventListener("mouseleave", stopScrolling);
