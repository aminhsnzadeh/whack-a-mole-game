const _mole = document.querySelectorAll('.mole')
const _hole = document.querySelectorAll('.whole')
const _scoreBrd = document.querySelector('#whacked')
const _body = document.querySelector('body')
let _hammer = document.getElementById('bonk')
let _lastHole
let _timeUp = false
let _score = 0
function _randTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function _randHole(holes) {
    const _index = Math.floor(Math.random() * holes.length)
    const hole2 = holes[_index]
    if (hole2 === _lastHole) {
        console.log('ok . . . this was the last one')
        return _randHole(holes)
    }
    _lastHole = hole2
    return hole2
}
function _startGame() {
    _scoreBrd.textContent = 0;
    _timeUp = false;
    _score = 0;
    _peep();
    setTimeout(() => _timeUp = true, 10000)


}
function _peep() {
    const _time = _randTime(200, 1000)
    const _hole3 = _randHole(_hole)
    _hole3.classList.add('up')
    setTimeout(() => {
        _hole3.classList.remove('up')
        if (!_timeUp) _peep()
    }, _time)
}
function _bonki(event) {
    if (!event.isTrusted) return alert('CHEATER !!!')
    _score++
    this.parentNode.classList.remove('up')
    _scoreBrd.textContent = _score
}
_mole.forEach(_mole => _mole.addEventListener('click', _bonki))

// function _bonkCursor(event) {
//     let x = event.clientX
//     let y = event.clientY
//     // console.log(x + ' : ' + y)
//     _hammer.style.top = y+'px'
//     _hammer.style.left = x+'px'
//     _hammer.style.transform = 'translate(-50%, -50%)'
// }

// function _clickedPre(event) {
//     _hammer.style.transform = 'translate(-50%, -50%) rotate(-45deg)'
//     event.stopPropagation()
// }
// function _clicked(event) {
//     _hammer.style.transform = 'translate(-50%, -50%) rotate(0deg)'
//     event.stopPropagation()
// }
// window.addEventListener('mousemove', _bonkCursor, true)
// window.addEventListener('mousedown', _clickedPre, false)
// window.addEventListener('mouseup', _clicked, false)
// _body.style.cursor = 'none'