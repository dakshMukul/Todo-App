const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allFieldFilled = [...inputFields].every((input) => {
      return input.value;
    });

    if (allFieldFilled) {
      checkBox.parentElement.classList.toggle("completed");
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.addEventListener("focus", function () {
    progressBar.classList.remove("show-error");
  });
});
localStorage.setItem("inputValues", inputFields);
