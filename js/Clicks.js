'use strict'

function onCellClicked(elCell, cellI, cellJ) {
    if (elCell.isMarked) return
    var currCell = gBoard[cellI][cellJ]
    var elSpan = elCell.querySelector('.cell span')
    elCell.classList.remove = 'numhidden'
    elSpan.style.display = 'block'
    elCell.isShown = true
    gGame.shownCount++
    elCell.isMarked = true
    // console.log(gGame.shownCount);
    if (currCell.isMine) {
        gameOver(elCell)
    } else {
        checkIfWin()
    }

}

function rightClick(elCell, cellI, cellJ) {
    var elSpan = elCell.querySelector('span')
    event.preventDefault()
    var currCell = gBoard[cellI][cellJ]
    var bombAr = [MINE]
    if (currCell.isMine) bombAr.push(currCell)
    if (!elCell.isShown) {
        if (!currCell.isMarked) {
            currCell.isMarked = true
            elSpan.innerHTML = FLAG
            gGame.markedCount++
            elSpan.classList.remove('numhidden')
        } else {
            (gBoard[cellI][cellJ].isMine) ? elSpan.innerHTML = bombAr[0] : elSpan.innerHTML = countNegs(cellI, cellJ, gBoard)
            currCell.isMarked = false
            elSpan.classList.add('numhidden')
            gGame.markedCount--
        }
        checkIfWin()
    }
}





function victory() {
    console.log('YOU WON!');
}
function checkIfWin() {
    if (checkIfHidden() && gGame.markedCount === gLevel.MINES) {
        victory()
    }
}

function checkIfHidden() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            console.log(!document.querySelector(`.cell-${i}-${j} span`)?.classList.contains('numhidden'));
            if (document.querySelector(` .cell-${i}-${j} span`)?.classList.contains('numhidden')) return true
        }
    }
    return false
}


