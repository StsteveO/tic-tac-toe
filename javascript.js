// Try tucking everything away inside of a module or factory. 
//If you only ever need ONE of something (gameBoard, displayController), use a module. 
//If you need multiples of something (players!), create them with factories.
const gameboard=(()=>{
const row1=[0,1,2];
const row2=[3,4,5];
const row3=[6,7,8];
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
        text.textContent="X";
        let squareChosen= e.path[0];//indiv square html
        // let gameboardArray=[square.zero, square.one, square.two, square.three, square.four, square.five, square.six, square.seven, square.eight];
        let indexOfChosenSq= gameboardArray.indexOf(squareChosen);//index num of chosen square
        gameboardArray.splice(indexOfChosenSq,1);
        console.log("Index #: "+indexOfChosenSq); 
        console.log("Array Length: "+gameboardArray.length)
        console.log(gameboardArray);
        return {gameboardArray};
    }));
    return {gameboardArray}
})();

