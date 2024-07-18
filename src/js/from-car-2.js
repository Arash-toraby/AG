const inputs2 = [
  { element: document.getElementById("userName-card-2"), name: "userName" },
  {
    element: document.getElementById("phoneNumber-card-2"),
    name: "phoneNumber",
  },
  { element: document.getElementById("email-card-2"), name: "email" },
  { element: document.getElementById("categorie-card-2"), name: "categorie" },
  { element: document.getElementById("site-card-2"), name: "site" },
];

const steps2 = [
  {
    element: document.getElementById("step11"),
    value: 1,
  },
  {
    element: document.getElementById("step22"),
    value: 2,
  },
];

const fromData2 = {
  userName: "",
  phoneNumber: "",
  email: "",
  site: "",
  categorie: "",
};

const sections2 = [
  { element: document.getElementById("form-card-2-section-1"), value: 1 },
  { element: document.getElementById("form-card-2-section-2"), value: 2 },
];

const buttonCardForm2 = document.getElementById("button-sumbit-card-form-2");

let stepCount2 = 1;
let sectionCount2 = 1;

const textIcon2 = document.getElementById("text-22");
const iconNumber2 = document.getElementById("number-icon-2");
const parentIcon2 = document.getElementById("parent2");
const mainElement = document.getElementById("main");

buttonCardForm2.addEventListener("click", () => changeSteps2());

inputs2.forEach((inp) => {
  inp.element.addEventListener("keydown", (e) => onChangeValue2(e));
});

function onChangeValue2(e) {
  const { value, name } = e.target;
  fromData2[name] = value;
  console.log(fromData2);
}

function changeSteps2() {
  if (stepCount2 >= 2) {
    stepCount2 = 1;
    sectionCount2++;
  } else {
    stepCount2++;
  }

  let condition2 = stepCount2 === 1 ? true : false;

  textIcon2.style.fontSize = !condition2 ? "14px" : "18px";
  textIcon2.style.textAlign = !condition2 ? "center" : "start";
  mainElement.style.display = !condition2 ? "grid" : "flex";
  mainElement.style.top = !condition2 ? "30px" : "170px";
  mainElement.style.left = !condition2 ? "15px" : "100px";
  // mainElement.style.top = !condition2 ? "50px" : "170px";
  // mainElement.style.left = !condition2 ? "20px" : "200px";
  parentIcon2.style.borderBlock = !condition2 ? "none" : "2px solid white";
  parentIcon2.style.height = !condition2 ? "00px" : "80px";

  buttonCardForm2.innerHTML =
    stepCount2 === 2 ? "ارسال سرویس" : "درخواست سرویس";

  setTimeout(() => {
    sections2[0].element.style.display = sectionCount2 === 2 ? "none" : "grid";
    sections2[1].element.style.opacity = sectionCount2 === 2 ? 100 : 0;
    sectionCount2 = 1;
    stepCount2 = 1;
  }, 3000);

  steps2.forEach((step) => {
    step.element.style.display = step.value === stepCount2 ? "grid" : "none";
  });

  sections2.forEach((section) => {
    section.element.style.display =
      section.value === sectionCount2 ? "grid" : "none";
  });
}
