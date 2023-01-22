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
const jsToHtmlBoard=()=>{
    //js gameboard to HTML
};
const clickSpotForMarker=()=>{
    //fxn for player to click on gameboard and have marker appear
};
const players={};
const gameFlow={};
