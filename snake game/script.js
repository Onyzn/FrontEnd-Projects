const canvas = document.querySelector(".game canvas")
const ctx = canvas.getContext("2d")
const controlButtons = document.querySelectorAll(".control button")

const eatFoodSound = new Audio("../audio/EatFood.wav")
const GameOverSound = new Audio("../audio/GameOver.wav")

canvas.height = 600;
canvas.width = 600;

const size = 30
const hasWallColision = true
const initialPosition = {x: 270, y: 270}

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosition = () => {
    return Math.round(randomNumber(0, canvas.width - size) / size) * size
}

let direction
let food = {x: randomPosition(), y: randomPosition()}
let snake = [initialPosition]

const drawFood = () => {
    ctx.fillStyle = "#f00"
    ctx.fillRect(food.x, food.y, size, size)
}

const drawSnake = () => {
    snake.forEach((position, index) => {
        ctx.fillStyle = "#003300"

        if (index == snake.length - 1) {
            ctx.fillStyle = "#002200"
        }

        ctx.fillRect(position.x, position.y, size, size)
    });
}

const moveSnake = () => {
    if (!direction) { return }

    const head = snake[snake.length - 1]
    
    if (head.x < 0) {head.x = canvas.width - size}
    if (head.y < 0) {head.y = canvas.height - size}
    if (head.x > canvas.width) {head.x = -size}
    if (head.y > canvas.height) {head.y = -size}

    if (direction == "right") {
        snake.push({x: head.x + size, y: head.y})
    }

    if (direction == "left") {
        snake.push({x: head.x - size, y: head.y})
    }

    if (direction == "up") {
        snake.push({x: head.x, y: head.y - size})
    }

    if (direction == "down") {
        snake.push({x: head.x, y: head.y + size})
    }

    snake.shift()
}

const checkEat = () => {
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
        eatFoodSound.play()
        
        snake.unshift(snake[0])
        food = {x: randomPosition(), y: randomPosition()}
    }
}

const gameOver = () => {
    GameOverSound.play()

    direction = undefined
    food = {x: randomPosition(), y: randomPosition()}
    snake = [initialPosition]
}

const checkColision = () => {
    const head = snake[snake.length - 1]
    const canvasLimit = canvas.width - size

    const wallCollision = hasWallColision && 
        (head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit)
        
    const selfCollision = snake.find((position, index) => 
        index < snake.length - 1 && position.x == head.x && position.y == head.y
    )

    if (selfCollision || wallCollision) {
        gameOver()
    }
}

const gameLoop = () => {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        moveSnake()

        drawFood()
        drawSnake()
        
        checkColision()
        checkEat()
        
    }, 200);
}

gameLoop()

document.addEventListener('keydown', (evt) => {
    if ((evt.key == "ArrowRight" || evt.key == "d") && direction != "left") {
        direction = "right"
    }

    if ((evt.key == "ArrowLeft" || evt.key == "a") && direction != "right") {
        direction = "left"
    }

    if ((evt.key == "ArrowUp" || evt.key == "w") && direction != "down") {
        direction = "up"
    }

    if ((evt.key == "ArrowDown" || evt.key == "s") && direction != "up") {
        direction = "down"
    }

    // if (evt.key  == "Escape") {
    //     direction = undefined
    // }
})

controlButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        if (btn.innerText == "RIGHT" && direction != "left") {
            direction = "right"
        }
    
        if (btn.innerText == "LEFT" && direction != "right") {
            direction = "left"
        }
    
        if (btn.innerText =="UP" && direction != "down") {
            direction = "up"
        }
    
        if (btn.innerText == "DOWN" && direction != "up") {
            direction = "down"
        }
        
    })
})