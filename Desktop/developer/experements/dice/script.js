// (function () {
//   let rotateY = 0,
//     rotateX = 0;

//   document.onkeydown = function (e) {
//     if (e.keyCode === 37) rotateY -= 4;
//     else if (e.keyCode === 38) rotateX += 4;
//     else if (e.keyCode === 39) rotateY += 4;
//     else if (e.keyCode === 40) rotateX -= 4;

//     document.querySelector(".cube").style.transform =
//       "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
//   };
// })();
const btn = document.querySelector(".btn");
const cube = document.querySelector(".cube");
const front = document.querySelector(".front");
const getRandom = function (min = 1, max = 6) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let sides = {
  side1: [0, 0],
  side2: [180, 0],
  side3: [270, 0],
  side4: [90, 0],
  side5: [0, 270],
  side6: [0, 90],
};
let startSide = [0, 0];

///////////////////////////////////////////////////////////////////////////////////////
btn.addEventListener("click", function () {
  let randomNumber = getRandom();
  console.log("randomNumber", randomNumber);
  let randomSide = sides[`side${randomNumber}`];

  cube.animate(
    [
      // keyframes
      { transform: `rotateY(${startSide[0]}deg) rotateX(${startSide[1]}deg)` },
      {
        transform: `rotateY(${randomSide[0] + 360}deg) rotateX(${
          randomSide[1] + 360
        }deg)`,
      },
    ],
    {
      // timing options
      duration: 1000,
      // iterations: Infinity,
    }
  );
  // startSide = randomSide;
  front.textContent = randomNumber;
  console.log(front.textContent);
});

console.log(startSide);
