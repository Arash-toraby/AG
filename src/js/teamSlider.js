const wrapper1 = document.getElementById("wrapper1");
const container1 = document.getElementById("container1");

let counter1 = 0;
let intervalId1;
const itemWidth1 = window.innerWidth >= 1024 ? 235 : 157; // Assuming each image has a width of 170px including gap

const startScrolling1 = () => {
  console.log("start");
  intervalId1 = setInterval(() => {
    wrapper1.style.transition = "0.5s ease-in-out all"; // Reduced transition duration
    counter1 -= itemWidth1; // Move to the left
    wrapper1.style.transform = `translateX(${counter1}px)`;

    // Append the first child to the end to maintain the infinite loop
    setTimeout(() => {
      wrapper1.style.transition = "none";
      wrapper1.appendChild(wrapper1.firstElementChild); // Move the first item to the end
      counter1 += itemWidth1; // Adjust counter back by one item's width
      wrapper1.style.transform = `translateX(${counter1}px)`;
    }, 500); // Match the reduced duration of the transition
  }, 1000); // Reduced interval time
};

const stopScrolling1 = () => {
  clearInterval(intervalId1);
  wrapper1.style.transition = "none";
  wrapper1.style.transform = `translateX(${counter1}px)`;
};

container1.addEventListener("mouseenter", startScrolling1);
container1.addEventListener("mouseleave", stopScrolling1);
