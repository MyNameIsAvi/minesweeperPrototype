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
    placeMines(gBoard, gLevel.SIZE)

    renderBoard(gBoard, '.container')
    console.table(gBoard);
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
    // board[1][2] = MINE
    // board[2][1] = MINE
    return board
}

function placeMines(board, size) {
    for (var i = 0; i < (gLevel.MINES); i++) {
        function getPos() {
            var pos = [getRandomIntInclusive(0, size - 1), getRandomIntInclusive(0, size - 1)];
            if (board[pos[0]][pos[1]].isMine) return getPos()
            // board[pos[0]][pos[1]].isMine = true
            return pos
        }
        var randomPos = getPos()
        board[randomPos[0]][randomPos[1]].isMine = true
    }
}


function gameOver(elCell) {
    var elSpan = elCell.querySelector('.numhidden')
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            if (gBoard[i][j].isMine) {
                gBoard[i][j].isShown = true
                // elSpan.classList.remove('numhidden')

            }
        }
    }
}


function easyMode() {
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

