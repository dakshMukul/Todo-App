document.getElementById("goals").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("unchecked");
    e.target.classList.toggle("checked");
  }
});
