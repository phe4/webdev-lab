let currentFontSize = 1.4;
let titleFontSize = 2.0;
const makeBigger = () => {
   currentFontSize = currentFontSize + 0.1;
   titleFontSize = titleFontSize + 0.1;
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
   document.querySelector("h1").style.fontSize = titleFontSize + "rem";
};

const makeSmaller = () => {
   currentFontSize = currentFontSize - 0.1;
   titleFontSize = titleFontSize - 0.1;
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
   document.querySelector("h1").style.fontSize = titleFontSize + "rem";
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

