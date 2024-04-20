const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const info = document.querySelector('.info');

const gravity = 0.8

let prevTime = 0

canvas.width = window.innerWidth * 0.9
canvas.height = 680

function animate() {
    window.requestAnimationFrame(animate)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.update()
    ground.draw()

    let delta = (performance.now() - prevTime) / 1_000
    let fps = 1 / delta

    prevTime = performance.now()
}

animate()