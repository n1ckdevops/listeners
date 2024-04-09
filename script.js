// ЭТО ПЕРВЫЙ ВАРИАНТ (КОТОРЫЙ НУЖЕН ПО ЗАДАНИЮ ------->>>>>(ПО КЛИКУ))
/*
const changeSquareColor = function (event) {
  const inputText = document.querySelector("input[type='text']");
  const squareColor = inputText.value;
  const square = document.getElementById("square");
  square.style.backgroundColor = squareColor;
};
const mainBtn = document.querySelector("#btn");
mainBtn.addEventListener("click", changeSquareColor);
*/

// второй вариант (мне показался офигительной идеей чтобы сразу менялся цвет при вводе текста(подхватил идею из видео-урока когда тект сразу в спане меняли, просто жуть как классно DDD))

function changeSquareColor() {
  const squareColor = inputText.value;
  const square = document.getElementById("square");
  square.style.backgroundColor = squareColor;
}
const inputText = document.querySelector("input[type='text']");
inputText.addEventListener("input", changeSquareColor);

const eBtn = document.getElementById("e_btn");
eBtn.style.display = "none";

const changeCircle = function () {
  const inputValue = inputRange.value;
  const circle = document.getElementById("circle");
  circle.style.height = inputValue + "%";
  circle.style.width = inputValue + "%";
};
const inputRange = document.querySelector("input[type='range']");
inputRange.addEventListener("input", changeCircle);
