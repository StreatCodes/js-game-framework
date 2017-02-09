import * as Input from './input';
import * as Time from './time';

let context;
let spriteMap = new Map();
let loop;
let timer;

export function loadImage(url){
    if(!spriteMap.has(url)){
        //TODO load image here
        //todo, xhr request maybe? maybe just JS new image(url)?
    }

    return spriteMap.get(url);
}

export function init(canvas, init, mainLoop) {
    context = document.getElementById("canvas").getContext("2d");

    console.log("Hello");
    console.log(typeof mainLoop);
    loop = mainLoop;
    init();
    run();
}

function run(){
    Time.update();
    requestAnimationFrame(this.run);
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    loop();

    //draw something
}


export class GameObject {
    constructor(sprite){
        this.sprite = sprite;
    }

    update(){

    }

    draw(){
        this.sprite.draw();
    }
}

export class Sprite {
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

