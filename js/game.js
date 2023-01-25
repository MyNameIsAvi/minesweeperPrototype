'use strict'
const none = ''
const MINE = '💣'


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
                isMine: false,
                isMarked: false
            }
        }
    }
    // board[1][2] = MINE
    // board[2][1] = MINE
    return board
}
function countNegs(cellI, cellJ, mat) {
    var negsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j] === MINE) negsCount++
        }
    }
    return negsCount
}

function onCellClicked(elCell, cellI, cellJ) {
    var elSpan = elCell.querySelector('.cell span')
    elCell.classList.remove = 'numhidden'
    elSpan.style.display = 'block'

}

function placeMines(board, size) {
    for (var i = 0; i < (gLevel.MINES); i++) {
        function getPos() {
            var pos = [getRandomIntInclusive(0, size - 1), getRandomIntInclusive(0, size - 1)];
            if (board[pos[0]][pos[1]].isMine) return getPos();
            // board[pos[0]][pos[1]].isMine = true
            return pos;
        }
        var randomPos = getPos()
        board[randomPos[0]][randomPos[1]] = MINE
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


