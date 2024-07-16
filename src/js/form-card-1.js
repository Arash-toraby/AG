const inputsCard = [
  { element: document.getElementById("userName-card-1"), name: "userName" },
  {
    element: document.getElementById("phoneNumber-card-1"),
    name: "phoneNumber",
  },
  { element: document.getElementById("email-card-1"), name: "email" },
  { element: document.getElementById("categorie-card-1"), name: "categorie" },
  { element: document.getElementById("site-card-1"), name: "site" },
];

const steps = [
  {
    element: document.getElementById("step1"),
    value: 1,
  },
  {
    element: document.getElementById("step2"),
    value: 2,
  },
];

const sections1 = [
  { element: document.getElementById("form-card-1-section-1"), value: 1 },
  { element: document.getElementById("form-card-1-section-2"), value: 2 },
];

const textIcon = document.getElementById("text-1");
const iconNumber = document.getElementById("number-icon-1");
const parentIcon = document.getElementById("parent");

const buttonCardForm1 = document.getElementById("button-sumbit-card-form");

const fromData = {
  userName: "",
  phoneNumber: "",
  email: "",
  site: "",
  categorie: "",
};

let stepCount = 1;
let sectionCount = 1;

buttonCardForm1.addEventListener("click", () => changeSteps());

inputsCard.forEach((inp) => {
  inp.element.addEventListener("keydown", (e) => onChangeValue(e));
});

function onChangeValue(e) {
  console.log("start");
  const { value, name } = e.target;
  fromData[name] = value;
  console.log(fromData);
}

function changeSteps() {
  console.log(stepCount);
  let condition = stepCount === 1 ? true : false;
  if (stepCount >= 2) {
    stepCount = 1;
    sectionCount++;
  } else {
    stepCount++;
  }

  textIcon.style.fontSize = condition ? "14px" : "18px";
  textIcon.style.textAlign = condition ? "center" : "start";
  iconNumber.style.display = condition ? "grid" : "flex";
  iconNumber.style.display = condition ? "grid" : "flex";
  iconNumber.style.top = condition ? "50px" : "170px";
  iconNumber.style.left = condition ? "50px" : "250px";
  parentIcon.style.borderBlock = condition ? "none" : "2px solid #47616E";
  parentIcon.style.height = condition ? "0px" : "80px";

  buttonCardForm1.innerHTML = stepCount === 2 ? "ارسال سرویس" : "درخواست سرویس";

  setTimeout(() => {
    sections1[0].element.style.display = sectionCount !== 2 ? "grid" : "none";
    sectionCount = 1;
    stepCount = 1;
  }, 3000);

  steps.forEach((step) => {
    step.element.style.display = step.value === stepCount ? "grid" : "none";
  });

  sections1.forEach((section) => {
    section.element.style.display =
      section.value === sectionCount ? "grid" : "none";
  });
}
