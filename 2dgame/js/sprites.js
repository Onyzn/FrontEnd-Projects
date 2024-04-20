class Collision {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    isColiding(collision) {
        return this.x < collision.x + collision.width &&
            this.x + this.width > collision.x &&
            this.y < collision.y + collision.height &&
            this.y + this.height > collision.y;
    }
}

class Body extends Collision {
    constructor(width, height) {
        super(0, 0, width, height);

        this.x = 0;
        this.y = 0;
        this.velocity = {x: 0, y: 0};
        this.width = width;
        this.height = height;

        this.onGround = false;

        this.move = {right: false, left: false}
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    jump() {
        if (!this.onGround) return
        this.jumped = true
        this.velocity.y = -15
    }

    update() {
        this.velocity.x = 0

        if (this.move.right) {
            this.velocity.x = 3
        }
    
        if (this.move.left) {
            this.velocity.x = -3
        }

        this.draw()
        

        info.innerHTML = `
            On Ground: <span style=\"color: ${this.onGround ? "green" : "red"}\">${this.onGround}</span><br>
            Velocity: x: ${this.velocity.x} y: ${this.velocity.y}<br>
            Player Position: x: ${this.x} y: ${this.y}<br>
        `

        if (this.y + this.height >= ground.y) {
            this.onGround = true
        } else {
            this.onGround = false
        }

        if (this.y + this.height > ground.y) {
            this.y = ground.y - this.height
            this.velocity.y = 0
        } else {
            if (!this.onGround) this.velocity.y += gravity
        }

        this.x += this.velocity.x
        this.y += this.velocity.y

        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}
const player = new Body(20, 20)
const ground = new Collision(0, canvas.height - 300, canvas.width, 20)