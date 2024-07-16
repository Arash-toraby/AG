const buttons = [
  { element: document.getElementById("button-start-form-1"), value: 1 },
  { element: document.getElementById("button-countion-form-1"), value: 2 },
  { element: document.getElementById("button-sumbit-form-1"), value: 3 },
];

const sections = [
  { element: document.getElementById("form-line-section-1"), value: 0 },
  { element: document.getElementById("form-line-section-2"), value: 1 },
  { element: document.getElementById("form-line-section-3"), value: 2 },
  { element: document.getElementById("form-line-section-4"), value: 3 },
];

const inputs = [
  { element: document.getElementById("username-form-1"), name: "userName" },
  { element: document.getElementById("phone-form-1"), name: "phoneNumber" },
  { element: document.getElementById("email-form-1"), name: "email" },
  { element: document.getElementById("site-form-1"), name: "site" },
  { element: document.getElementById("gategori-form-1"), name: "categorie" },
];

const subData = {
  userName: "",
  phoneNumber: "",
  email: "",
  site: "",
  categorie: "",
};

let counterForm = 0;

inputs.forEach((inp) => {
  inp.element.addEventListener("keydown", (e) => onChange(e));
});

buttons.forEach((button) => {
  if (button.element) {
    button.element.addEventListener("click", () => {
      console.log(subData); // Logging subData for debugging

      if (counterForm === 0) {
        changeSections(button.value);
      } else if (counterForm === 1) {
        if (subData.userName && subData.phoneNumber && subData.email) {
          changeSections(button.value);
        } else {
          highlightEmptyInputs(allValuesNonEmptyArray(subData));
        }
      } else if (counterForm > 1) {
        if (subData.site && subData.categorie) {
          changeSections(button.value);
        } else {
          highlightEmptyInputs(allValuesNonEmptyArray(subData));
        }
      }
    });
  }
});

function onChange(e) {
  const { value, name } = e.target;
  subData[name] = value;
}

function changeSections(value) {
  counterForm = value;
  sections.forEach((sec) => {
    if (sec.value === value) {
      sec.element.style.transition = "all ease-in-out 2s";
      sec.element.style.opacity = 1;
      if (value > 0) {
        const prev = sections.find((s) => s.value === value - 1);
        setTimeout(() => {
          console.log(prev.value, "prev");
          prev.element.style.transform = "translateX(-1000px)";
        }, 1700);
      }
    } else if (value >= 3 && allValuesNonEmptyStrings(subData)) {
      setTimeout(() => {
        subData.categorie = "";
        subData.email = "";
        subData.phoneNumber = "";
        subData.userName = "";
        subData.site = "";
        counterForm = 0;
        sections.forEach((se) => {
          if (se.value === 0) {
            se.element.style.transition = "all ease-in-out 2s";
            se.element.style.opacity = 1;
            se.element.style.transform = "translateX(0px)";
          } else {
            se.element.style.transition = "all ease-in-out 2s";
            se.element.style.transform = "translateX(0px)";
            se.element.style.opacity = 0;
          }
        });
      }, 3000);
    }
  });
  const lol = sections
    .filter((sec) => sec.value !== value)
    .forEach((sec) => {
      sec.element.style.transition = "all ease-in-out 2s";
      sec.element.style.opacity = 0;
    });
}

const allValuesNonEmptyStrings = (obj) =>
  Object.values(obj).every(
    (value) => typeof value === "string" && value.trim() !== ""
  );

function highlightEmptyInputs(keys) {
  inputs.forEach((i) => {
    if (keys.includes(i.name)) {
      i.element.style.border = "2px solid red";
    } else {
      i.element.style.border = "2px solid rgba(199, 199, 199, 0.5)";
    }
  });
}

const allValuesNonEmptyArray = (obj) => {
  const emptyKeys = Object.keys(obj).filter((key) => {
    const value = obj[key];
    return !(typeof value === "string" && value.trim() !== "");
  });

  return emptyKeys.length > 0 ? emptyKeys : null;
};
