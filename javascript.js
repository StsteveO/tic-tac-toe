// Try tucking everything away inside of a module or factory. 
//If you only ever need ONE of something (gameBoard, displayController), use a module. 
//If you need multiples of something (players!), create them with factories.
const gameboard=(()=>{
const row1=["X","X","X"];
const row2=["X","X","X"];
const row3=["X","X","X"];
return{row1, row2, row3};
})();
// to change marker...gameboard.row1[0]="change";
//to see change...console.log(gameboard.row1[0]);
const square=(()=>{
    let one = gameboard.row1[0];
    let two = gameboard.row1[1];
    let three = gameboard.row1[2];
    let four = gameboard.row2[0];
    let five = gameboard.row2[1];
    let six = gameboard.row2[2];
    let seven = gameboard.row3[0];
    let eight = gameboard.row3[1];
    let nine = gameboard.row3[2];
    one = document.querySelector(".square1");
    two = document.querySelector(".square2");
    three = document.querySelector(".square3");
    four = document.querySelector(".square4");
    five = document.querySelector(".square5");
    six = document.querySelector(".square6");
    seven = document.querySelector(".square7");
    eight = document.querySelector(".square8");
    nine = document.querySelector(".square9");
    return {one, two, three, four, five, six, seven, eight, nine};
})();
// to change color/affect square...square.three.style.cssText= "background-color: blue;";

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

const gameFlow=()=>{

};
