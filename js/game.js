class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        //other game level properties?

    }

    render(deltaTime) {
        //fill in what to do every new frame
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.ctx.beginPath()
        this.ctx.lineWidth = "6"
        this.ctx.strokeStyle = "red"
        this.ctx.rect(100,100, 600,600)
        this.ctx.stroke()
        this.ctx.fillText("game will be in this canvas, current framerate: " + Math.floor(1000/deltaTime), 250,350)
    }
}

window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    //default size? check from window? unneeded maybe if changing within game object?
    canvas.width = 720
    canvas.height = 720

    const game = new Game(canvas, ctx)
    game.render()

    let lastTime = 0

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        game.render(deltaTime)
        requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
})
