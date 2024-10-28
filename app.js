let btns = document.querySelectorAll(".btn");
let del = document.querySelector(".del");
let rem = document.querySelector(".rem");
let eq = document.querySelector(".eq");
let output = document.querySelector(".screen");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    output.innerText += btn.innerText;
  });
});

eq.onclick = function () {
  let operation = output.innerText;
  output.innerText = eval(operation);
};

del.onclick = function () {
  output.innerText = output.innerText
    .split("")
    .slice(0, output.innerText.split("").length - 1)
    .join("");
};

rem.onclick = function () {
  output.innerText = "";
};
