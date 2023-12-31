const toggle = (el) => {
  if (el.style.opacity === "0.5") {
    el.style.textDecoration = "none";
    el.style.opacity = "1";
    return;
  }
  el.style.textDecoration = "line-through";
  el.style.opacity = "0.5";
};

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    toggle(li);
  });
});

const displaySolution = () => {
  const codeEl = document.querySelector("#result");
  const solutionBtn = document.querySelector("#solution-button");
  if (codeEl.style.display === "none") {
    solutionBtn.style.backgroundColor = "var(--text-color-1)";
    solutionBtn.innerHTML = "הסתר פתרון";
    codeEl.style.display = "block";
  } else {
    solutionBtn.style.backgroundColor = "var(--card-bg)";
    solutionBtn.innerHTML = "הצג פתרון";
    codeEl.style.display = "none";
  }
};

const addLinksToAllExercise = (
  numOfExercise = 50,
  exerciseName = "javascript"
) => {
  let strHtml = "";
  for (let i = 1; i <= numOfExercise; i++) {
    strHtml += `<a href="${exerciseName}-exercise_${i}.html">${i}</a>`;
  }
  document.querySelector(".questions-list").innerHTML = strHtml;
};
