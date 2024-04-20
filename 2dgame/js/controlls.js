

document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
        player.jump()
    }

    if (e.key == 'd' ) {
        player.move.right = true
    }

    if (e.key == 'a') {
        player.move.left = true
    }

    if (e.key == 'Enter') {
        info.style.display = info.style.display == 'none' ? 'block' : 'none' 
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'd' ) {
        player.move.right = false
    }

    if (e.key == 'a') {
        player.move.left = false
    }
})