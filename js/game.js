'use strict'
const MINE = '💣'
const FLAG = '🚩'


var gBoard = makeGboard()
var gLevel = levels()
var gGame = makeGame()
function makeGboard() {
    return gBoard = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: true

    }
}

function levels() {
    return gLevel = {
        SIZE: 4,
        MINES: 2
    }
}

function makeGame() {
    return gGame = {
        isOn: false,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }
}

function onInIt() {
    gBoard = buildBoard(4, 4)
    // placeMines(gBoard, gLevel.SIZE)

    renderBoard(gBoard, '.container')
}

function buildBoard(rows, cols) {
    var board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAround: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }
    board[1][2].isMine = true
    board[2][1].isMine = true
    return board
}

// function placeMines(board, size) {
//     for (var i = 0; i < (gLevel.MINES); i++) {
//         function getPos() {
//             var pos = [getRandomIntInclusive(0, size - 1), getRandomIntInclusive(0, size - 1)];
//             if (board[pos[0]][pos[1]].isMine) return getPos()
//             // board[pos[0]][pos[1]].isMine = true
//             return pos
//         }
//         var randomPos = getPos()
//         board[randomPos[0]][randomPos[1]].isMine = true
//     }
// }


function gameOver() {
    var table = document.querySelector("table");
    var td = table.querySelectorAll("td span");
    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute('class', 'show-num');
    }
    console.log('YOU LOSE');
}




function easyMode() {

    // console.log(elCell);
    // DOM - 
    // elCell.classList.remove('numhidden')
    // Modal
    gBoard[0][0].isShown = true
    gLevel = {
        SIZE: 4,
        MINES: 2
    }
    onInIt()

}

function mediumMode() {
    gLevel = {
        SIZE: 8,
        MINES: 14
    }
    onInIt()
}

function hardMode() {
    gLevel = {
        SIZE: 12,
        MINES: 32
    }
    onInIt()
}

