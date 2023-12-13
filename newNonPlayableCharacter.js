function newNonPlayableCharacter(x, y) {
    let img = newImage('assets/red-character/static.gif')
    img.style.zIndex = 1;

    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x--
        }
        if (direction === 'north') {
            y++
        }
        if (direction === 'east') {
            x++
        }
        if (direction === 'south') {
            y--
        }
        img.style.left = x + 'px'
        img.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

function wait(time, callback) {
    setTimeout(() => {
        if (time) {
            stop();
        }
        if (callback) {
            callback();
        }
    }, time)
}

    function walkEast(time, callback) {
        direction = 'east'
        img.src = `./assets/red-character/east.gif`
        wait(time, callback)
    }

    function walkNorth(time, callback) {
        direction = 'north'
        img.src = `./assets/red-character/north.gif`
        wait(time, callback)
    }

    function walkWest(time, callback) {
        direction = 'west'
        img.src = `./assets/red-character/west.gif`
        wait(time, callback)
    }

    function walkSouth(time, callback) {
        direction = 'south'
        img.src = `./assets/red-character/south.gif`
        wait(time, callback)
    }

    function stop(time, callback) {
        direction = null
        img.src = `./assets/red-character/static.gif`
        wait(time, callback)
    }

    return {
        img: img,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}