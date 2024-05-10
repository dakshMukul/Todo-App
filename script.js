const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
var completedCount = 0;

window.addEventListener("load", function () {
  inputFields.forEach((input) => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });
});

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allFieldFilled = [...inputFields].every((input) => {
      return input.value;
    });

    if (allFieldFilled) {
      checkBox.parentElement.classList.toggle("completed");
      // console.log(checkBox.parentElement.classList[1]);
      updateProgress(checkBox.parentElement.classList[1]);
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.addEventListener("input", function () {
    localStorage.setItem(input.id, input.value);
  });

  input.addEventListener("focus", function () {
    progressBar.classList.remove("show-error");
  });
});

function updateProgress(className) {
  if (className === "completed") {
    completedCount++;
  } else if (className === undefined) {
    completedCount--;
  }

  const progressValue = document.querySelector(".progress-value");

  const widthValue = completedCount * 33.33;
  progressValue.style.width = `${widthValue}%`;
  progressValue.children[0].textContent = `${completedCount}/3 Completed`;
}

window.addEventListener("load", updateProgress);
