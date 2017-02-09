//get mouse pos , do when renderer completed TODO

let prevTime = new Date().getTime() / 1000.0;
let time = new Date().getTime() / 1000.0;
function update(){
    this.prevTime = this.time;
    this.time = new Date().getTime() / 1000.0;
    this.dtVal = this.time - this.prevTime;
}

//returns time since start of last frame

let spriteMap = new Map();
let loop$1;
function loadImage(url){
    if(!spriteMap.has(url)){
        //todo improve
        let img = new Image(); 
        img.src = url;

        spriteMap.set(url, img);
    }

    return spriteMap.get(url);
}

function init$1(canvas, init, mainLoop) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    console.log("Hello");
    console.log(typeof mainLoop);
    loop$1 = mainLoop;
    init();
    run();
}

function run(){
    update();
    requestAnimationFrame(this.run);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    loop$1();

    //draw something
}




class Sprite {
    constructor(context, url, x, y){
        this.context = context;
        this.image = loadImage(url);
        this.x = x;
        this.y = y;

        console.log(context);
        
        //TODO coords
    }

    draw(){
        this.context.drawImage(this.image, this.x, this.y, 100, 100);
        // dx, dy, dWidth, dHeight);
    }
}

let img = loadImage("images/spritesheet-demo.png");
console.log(document.getElementById("canvas").getContext('2d'));
let sprite = new Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", 0, 0);

function init$$1() {
}

function loop() {
    sprite.draw();
    console.log("Hello, world!");
}

init$1(document.getElementById("canvas"), init$$1, loop);
