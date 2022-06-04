const spots = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let next = PLAYER_X;

const scoreBoard = Array(spots.length);
scoreBoard.fill(null);
// this allows the element to change within this array. allowing it to start at 0 ,will override original when the game starts


function hoverOver() {
    spots.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });
    // this removes hover text once a player makes a move

    const hoverClass = `${next.toLowerCase()}-hover`;

    spots.forEach((tile) => {
        if (tile.innerText == "") {
            tile.classList.add(hoverClass);
        }
    });
}

const strike = document.getElementById("strike");
const gameOver = document.getElementById("game-over");
const gameOverMessage = document.getElementById("game-over-message");
const startOver = document.getElementById("start-over");
startOver.addEventListener("click", satrtNewGame);

hoverOver() ;

function tileClick(evt) {
    if (gameOver.classList.contains("visible")) {
        return;
    }

    const tile = evt.target;
    const tileSpot = tile.dataset.index;
    if (tile.innerText != "") {
        return;
    }

    if (turn === PLAYER_X) {
        tile.innerText = PLAYER_X;
        scoreBoard[tileSpot - 1] = PLAYER_X;
        next = PLAYER_O;
    } else {
        tile.innerText = PLAYER_O;
        scoreBoard[tileSpot - 1] = PLAYER_O;
        next = PLAYER_X;
    }

    hoverOver();
    checkWinner();
}

function checkWinner() {
    for (winningCombination of winningCombinations) {
        // this function will rename the variables created while hving the same properties
       const {combo, strikeClass } = winningCombination;
       const tileValue1 = scoreBoard[combo[0] - 1];
       const tileValue2 = scoreBoard[combo[1] - 1];
       const tileValue3 = scoreBoard[combo[2] - 1];
    }

        if (
            tileValue1 !== null &&
            // return truthy
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ) {
            strike.classList.add(strikeClass);
            gamerOverScreen(tileValue1);
            return;
        }
}

        // this section of code will assist us with checking for draws
        const allSpotsFilled = scoreBoard.every((tile) => tile !== null);
        if (allSpotsFilled) {
            gamerOverScreen(null);
        }

        function gameOverScreen(winnerMessage) {
            let message = "Youre both losers!";
            if (winnerText != null) {
                message = ` You Won ${winnerMessge}!`;
            }
            gameOver.className = "visible";
            gameOverMessage.innerText = text;
        }

        function startOverGame() {
            strike.className = "strike";
            gameOver.className = "hidden";
            scoreBoard.fill(null);
            spots.forEach((tile) => (tile.innerText = ""));
            next = PLAYER_X;
            hoverOver();
        }

        const winningCombinations = [
            // possibilites in rows
            { combo: [1, 2, 3], strikeClass: "strike-row-1"},
            { combo: [4, 5, 6], strikeClass: "strike-row-2"},
            { combo: [7, 8, 9], strikeClass: "strike-row-3"},
            // possibilities in columns
            { combo: [1, 4, 7], strikeClass: "strike-column-1"},
            { combo: [2, 5, 8], strikeClass: "strike-column-2"},
            { combo: [3, 6, 9], strikeClass: "strike-column-3"},

            { combo: [1, 5, 9], strikeClass: "strike-diagonal-1"},
            { combo: [3, 5, 7], strikeClass: "strike-diagonal-2"},
        ];


