function newPlayableCharacter(x, y) {
    const img = newImage('assets/green-character/static.gif')
    img.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            img.src = `assets/green-character/static.gif`
        }
        if (direction === 'west') {
            img.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            img.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            img.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            img.src = `assets/green-character/south.gif`
        }
    }

    move(img).withArrowKeys(x, y, handleDirectionChange)

    return {
        img: img
    }
}