'use strict'

function onCellClicked(elCell, cellI, cellJ) {
    if (elCell.isMarked) return
    var currCell = gBoard[cellI][cellJ]
    var elSpan = elCell.querySelector('.cell span')
    elCell.classList.remove = 'numhidden'
    elSpan.style.display = 'block'
    elCell.isShown = true
    if (currCell.isMine) {
        gameOver(elCell)
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
            elSpan.innerHTML = FLAG
            gGame.markedCount++
            elSpan.classList.remove('numhidden')
        } else {
            (gBoard[cellI][cellJ].isMine) ? elSpan.innerHTML = bombAr[0] : elSpan.innerHTML = countNegs(cellI, cellJ, gBoard)
            elSpan.classList.add('numhidden')
            gGame.markedCount--
        }
        currCell.isMarked = !currCell.isMarked
    }
}
