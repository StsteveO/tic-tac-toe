const gameboard=(()=>{
const row1=[];
const row2=[];
const row3=[];
return{row1, row2, row3};
})();

const square=(()=>{
    let zero = gameboard.row1[0];
    let one = gameboard.row1[1];
    let two = gameboard.row1[2];
    let three = gameboard.row2[0];
    let four = gameboard.row2[1];
    let five = gameboard.row2[2];
    let six = gameboard.row3[0];
    let seven = gameboard.row3[1];
    let eight = gameboard.row3[2];
    zero = document.querySelector(".square0");
    one = document.querySelector(".square1");
    two = document.querySelector(".square2");
    three = document.querySelector(".square3");
    four = document.querySelector(".square4");
    five = document.querySelector(".square5");
    six = document.querySelector(".square6");
    seven = document.querySelector(".square7");
    eight = document.querySelector(".square8");
    return {zero, one, two, three, four, five, six, seven, eight};
})();

const playerFactory=(name, marker)=>{
    return{name,marker};
};
const player=(()=>{
    const main = playerFactory("Superman", "S");
    const opp = playerFactory("Zod", "Z");
    return {main, opp};
})();

const gameFlow=(()=>{
    let gameboardArray=[square.zero, square.one, square.two, square.three, square.four, square.five, square.six, square.seven, square.eight];
    let texts= document.querySelectorAll(".text");
    texts.forEach(text=>text.addEventListener("click", (e)=>{
      text.classList.remove("pre-click");
      text.classList.add("post-click");
      text.textContent = "X";
      let squareChosen = e.path[0];
      let indexOfChosenSq = gameboardArray.indexOf(squareChosen);
      gameboardArray.splice(indexOfChosenSq, 1);
      let originalIndexChosen = squareChosen.getAttribute("id");

      if (originalIndexChosen === "row1[0]") {
        gameboard.row1[0] = "X";
      } else if (originalIndexChosen === "row1[1]") {
        gameboard.row1[1] = "X";
      } else if (originalIndexChosen === "row1[2]") {
        gameboard.row1[2] = "X";
      } else if (originalIndexChosen === "row2[0]") {
        gameboard.row2[0] = "X";
      } else if (originalIndexChosen === "row2[1]") {
        gameboard.row2[1] = "X";
      } else if (originalIndexChosen === "row2[2]") {
        gameboard.row2[2] = "X";
      } else if (originalIndexChosen === "row3[0]") {
        gameboard.row3[0] = "X";
      } else if (originalIndexChosen === "row3[1]") {
        gameboard.row3[1] = "X";
      } else if (originalIndexChosen === "row3[2]") {
        gameboard.row3[2] = "X";
      }

      if (
        (gameboard.row1[0] === "X" &&
          gameboard.row1[1] === "X" &&
          gameboard.row1[2] === "X") ||
        (gameboard.row2[0] === "X" &&
          gameboard.row2[1] === "X" &&
          gameboard.row2[2] === "X") ||
        (gameboard.row3[0] === "X" &&
          gameboard.row3[1] === "X" &&
          gameboard.row3[2] === "X") ||
        (gameboard.row1[0] === "X" &&
          gameboard.row2[0] === "X" &&
          gameboard.row3[0] === "X") ||
        (gameboard.row1[1] === "X" &&
          gameboard.row2[1] === "X" &&
          gameboard.row3[1] === "X") ||
        (gameboard.row1[2] === "X" &&
          gameboard.row2[2] === "X" &&
          gameboard.row3[2] === "X") ||
        (gameboard.row1[0] === "X" &&
          gameboard.row2[1] === "X" &&
          gameboard.row3[2] === "X") ||
        (gameboard.row1[2] === "X" &&
          gameboard.row2[1] === "X" &&
          gameboard.row3[0] === "X")
      ) {
        let overlay = document.querySelector(".overlay");
        let winBanner = document.querySelector(".win-banner");
        overlay.classList.add("active");
        winBanner.classList.add("active");
        return;
      }

      if (gameboardArray.length === 0) {
        let overlay = document.querySelector(".overlay");
        let tieBanner = document.querySelector(".tie-banner");
        overlay.classList.add("active");
        tieBanner.classList.add("active");
        return;
      }

      let computerRandNum = Math.floor(Math.random() * gameboardArray.length); 
      let computerChoice = gameboardArray[computerRandNum]; 

      let orginalIndexCompChosen = computerChoice.getAttribute("id");
      gameboard.orginalIndexCompChosen = "O";

      if (orginalIndexCompChosen === "row1[0]") {
        gameboard.row1[0] = "O";
      } else if (orginalIndexCompChosen === "row1[1]") {
        gameboard.row1[1] = "O";
      } else if (orginalIndexCompChosen === "row1[2]") {
        gameboard.row1[2] = "O";
      } else if (orginalIndexCompChosen === "row2[0]") {
        gameboard.row2[0] = "O";
      } else if (orginalIndexCompChosen === "row2[1]") {
        gameboard.row2[1] = "O";
      } else if (orginalIndexCompChosen === "row2[2]") {
        gameboard.row2[2] = "O";
      } else if (orginalIndexCompChosen === "row3[0]") {
        gameboard.row3[0] = "O";
      } else if (orginalIndexCompChosen === "row3[1]") {
        gameboard.row3[1] = "O";
      } else if (orginalIndexCompChosen === "row3[2]") {
        gameboard.row3[2] = "O";
      }

      if (
        (gameboard.row1[0] === "O" &&
          gameboard.row1[1] === "O" &&
          gameboard.row1[2] === "O") ||
        (gameboard.row2[0] === "O" &&
          gameboard.row2[1] === "O" &&
          gameboard.row2[2] === "O") ||
        (gameboard.row3[0] === "O" &&
          gameboard.row3[1] === "O" &&
          gameboard.row3[2] === "O") ||
        (gameboard.row1[0] === "O" &&
          gameboard.row2[0] === "O" &&
          gameboard.row3[0] === "O") ||
        (gameboard.row1[1] === "O" &&
          gameboard.row2[1] === "O" &&
          gameboard.row3[1] === "O") ||
        (gameboard.row1[2] === "O" &&
          gameboard.row2[2] === "O" &&
          gameboard.row3[2] === "O") ||
        (gameboard.row1[0] === "O" &&
          gameboard.row2[1] === "O" &&
          gameboard.row3[2] === "O") ||
        (gameboard.row1[2] === "O" &&
          gameboard.row2[1] === "O" &&
          gameboard.row3[0] === "O")
      ) {
        let overlay = document.querySelector(".overlay");
        let loseBanner = document.querySelector(".lose-banner");
        overlay.classList.add("active");
        loseBanner.classList.add("active");
        return;
      }

      gameboardArray.splice(computerRandNum, 1);
      computerChoice.textContent = "O";
      computerChoice.classList.remove("pre-click");
      computerChoice.classList.add("comp-pick");
      return { gameboardArray };
    }));
    return {gameboardArray}
})();

