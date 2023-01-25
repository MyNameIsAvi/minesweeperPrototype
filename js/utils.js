'use strict'


function renderBoard(board, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var className = `cell cell-${i}-${j}, Shown`
            var location = `${i}-${j}`
            var minesCount = countNegs(i, j, board)
            strHTML += `<td class="${className}" cell-value="${minesCount}" onclick="onCellClicked(this,${i},${j})" oncontextmenu="rightClick(this,${i},${j})" data="${location}"><span class="numhidden">${board[i][j].isMine ? MINE : minesCount}
             ${board[i][j].classList !== 'numhidden' ? minesCount = '' : minesCount = countNegs(i, j, board)}</span></td>`
        }
        strHTML += '</tr>'

    }
    strHTML += '</tbody></table>'
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function countNegs(cellI, cellJ, board) {
    var negsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue
            if (board[i][j].isMine) negsCount++
        }
    }
    return negsCount
}


