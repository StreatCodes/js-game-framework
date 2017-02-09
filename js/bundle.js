//get mouse pos , do when renderer completed TODO

let prevTime = new Date().getTime() / 1000.0;
let time = new Date().getTime() / 1000.0;
function update(){
    this.prevTime = this.time;
    this.time = new Date().getTime() / 1000.0;
    this.dtVal = this.time - this.prevTime;
}

//returns time since start of last frame

let context;
let spriteMap = new Map();
let loop$1;
function loadImage(url){
    if(!spriteMap.has(url)){
        //TODO load image here
        //todo, xhr request maybe? maybe just JS new image(url)?
    }

    return spriteMap.get(url);
}

function init$1(canvas, init, mainLoop) {
    context = document.getElementById("canvas").getContext("2d");

    console.log("Hello");
    console.log(typeof mainLoop);
    loop$1 = mainLoop;
    init();
    run();
}

function run(){
    update();
    requestAnimationFrame(this.run);
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    loop$1();

    //draw something
}




class Sprite {
    constructor(context, url, x, y){
        this.context = context;
        this.url = loadImage(url);
        this.x = x;
        this.y = y;
        
        //TODO coords
    }

    draw(){
        void context.drawImage(image, x, y, 100, 100);
        // dx, dy, dWidth, dHeight);
    }
}

let img = loadImage("/images/spritesheet-demo.png");
let sprite = new Sprite(null, "/images/spritesheet-demo.png", 0, 0);

function init$$1() {
}

function loop() {
    sprite.draw();
    console.log("Hello, world!");
}

init$1(document.getElementById("canvas"), init$$1, loop);
