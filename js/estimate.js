const exception = document.querySelector("#exception");
const exceptionPipe = document.querySelector("#exceptionPipe");
const reset = document.querySelector("input[type='reset']");
const submit = document.querySelector("input[type='submit']");
const agree = document.querySelectorAll("#agree");
const startDate = document.querySelector("#start");

exception.addEventListener("click", (e) => {
  exceptionPipe.value = "";
  if (e.target.checked === true) {
    exceptionPipe.classList.remove("hidden");
  } else {
    exceptionPipe.classList.add("hidden");
  }
});

reset.addEventListener("click", () => {
  exceptionPipe.classList.add("hidden");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!agreeCheck()) alert("약관에 동의하셔야 합니다.");
});
function agreeCheck() {
  let count = 0;
  agree.forEach((element) => {
    element.checked === true ? (count += 1) : count;
  });
  return count === 2 ? true : false;
}

(function curentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  startDate.min = `${year}-${month}-${day}`;
  startDate.value = `${year}-${month}-${day}`;
})();
