// Try tucking everything away inside of a module or factory. 
//If you only ever need ONE of something (gameBoard, displayController), use a module. 
//If you need multiples of something (players!), create them with factories.
const gameboard=(()=>{
const row1=[];
const row2=[];
const row3=[];
return{row1, row2, row3};
})();
// to change marker...gameboard.row1[0]="change";
//to see change...console.log(gameboard.row1[0]);
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
// to change color/affect square...square.two.style.cssText= "background-color: blue;";

const jsToHtmlBoard=()=>{
    //js gameboard to HTML
};
const clickSpotForMarker=()=>{
    //fxn for player to click on gameboard and have marker appear
};
const playerFactory=(name, marker)=>{
    return{name,marker};
};
const player=(()=>{
    const main = playerFactory("Superman", "S");
    const opp = playerFactory("Zod", "Z");
    return {main, opp};
})();
//access players...ex. player.main.name;

const gameFlow=(()=>{
    let gameboardArray=[square.zero, square.one, square.two, square.three, square.four, square.five, square.six, square.seven, square.eight];
    let texts= document.querySelectorAll(".text");
    texts.forEach(text=>text.addEventListener("click", (e)=>{
      text.classList.remove("pre-click");
      text.classList.add("post-click");
      text.textContent = "X";
      let squareChosen = e.path[0]; //indiv square html
      let indexOfChosenSq = gameboardArray.indexOf(squareChosen); //index num of chosen square
      gameboardArray.splice(indexOfChosenSq, 1);

      let originalIndexChosen = squareChosen.getAttribute("id");
    //   console.log(originalIndexChosen);

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
      };

      if (gameboardArray.length === 0) {
        console.log("Game Over");
        return;
      };

      if((gameboard.row1[0]==="X" && gameboard.row1[1]==="X" && gameboard.row1[2]==="X")
      || (gameboard.row2[0]==="X" && gameboard.row2[1]==="X" && gameboard.row2[2]==="X")
      || (gameboard.row3[0]==="X" && gameboard.row3[1]==="X" && gameboard.row3[2]==="X")
      || (gameboard.row1[0]==="X" && gameboard.row2[0]==="X" && gameboard.row3[0]==="X")
      || (gameboard.row1[1]==="X" && gameboard.row2[1]==="X" && gameboard.row3[1]==="X")
      || (gameboard.row1[2]==="X" && gameboard.row2[2]==="X" && gameboard.row3[2]==="X")
      || (gameboard.row1[0]==="X" && gameboard.row2[1]==="X" && gameboard.row3[2]==="X")
      || (gameboard.row1[2]==="X" && gameboard.row2[1]==="X" && gameboard.row3[0]==="X")){
        console.log("YOU WON!")
      };

      // computer picks
      let computerRandNum = Math.floor(Math.random() * gameboardArray.length); //number computer picked
      let computerChoice = gameboardArray[computerRandNum]; //html square computer picks

      let orginalIndexCompChosen = computerChoice.getAttribute("id");
      gameboard.orginalIndexCompChosen = "O";
    //   console.log(orginalIndexCompChosen);

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
      };

      if((gameboard.row1[0]==="O" && gameboard.row1[1]==="O" && gameboard.row1[2]==="O")
      || (gameboard.row2[0]==="O" && gameboard.row2[1]==="O" && gameboard.row2[2]==="O")
      || (gameboard.row3[0]==="O" && gameboard.row3[1]==="O" && gameboard.row3[2]==="O")
      || (gameboard.row1[0]==="O" && gameboard.row2[0]==="O" && gameboard.row3[0]==="O")
      || (gameboard.row1[1]==="O" && gameboard.row2[1]==="O" && gameboard.row3[1]==="O")
      || (gameboard.row1[2]==="O" && gameboard.row2[2]==="O" && gameboard.row3[2]==="O")
      || (gameboard.row1[0]==="O" && gameboard.row2[1]==="O" && gameboard.row3[2]==="O")
      || (gameboard.row1[2]==="O" && gameboard.row2[1]==="O" && gameboard.row3[0]==="O")){
        console.log("YOU LOST!")
      };

      console.log(gameboard);

      gameboardArray.splice(computerRandNum, 1);
      computerChoice.textContent = "O";
      computerChoice.classList.remove("pre-click");
      computerChoice.classList.add("comp-pick");
      return { gameboardArray };
    }));
    return {gameboardArray}
})();

