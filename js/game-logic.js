// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';


const setPlayerMoves = (player, mv1, mt1, mv2, mt2, mv3, mt3) => {
    if(!mv1 || !mv2 || !mv3 || !mt1 || !mt2 || ! mt3){
        return;
    }
    if (!types(mv1, mv2, mv3)){
        return;
    }
    if (!validValues(mt1, mt2, mt3)){
        return;
    }

    if (mv1 + mv2 + mv3 > 99){
        return;
    }

    switch(player){
        case P1:
          playerOneMoveOneType = mt1;
          playerOneMoveOneValue = mv1;
          playerOneMoveTwoType = mt2;
          playerOneMoveTwoValue = mv2;
          playerOneMoveThreeType = mt3;
          playerOneMoveThreeValue = mv3;
          break;

        case P2:
          playerTwoMoveOneType = mt1;
          playerTwoMoveOneValue = mv1;
          playerTwoMoveTwoType = mt2;
          playerTwoMoveTwoValue = mv2;
          playerTwoMoveThreeType = mt3;
          playerTwoMoveThreeValue = mv3;
          break;
    }
};

const types = (t1, t2, t3) => validType(t1) && validType(t2) && validType(t3);

const validType = (type) => (type === ROCK || type === PAPER || type === SCISSORS);

const validValues = (v1, v2, v3) => v1 >= 1 && v2 >= 1 && v3 >= 1 && v1 < 99 && v2 < 99 && v3 < 99;
