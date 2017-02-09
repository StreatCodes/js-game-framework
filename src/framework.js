import * as Input from './input';
import * as Time from './time';

let canvas;
let context;
let spriteMap = new Map();
let loop;
let timer;

export function loadImage(url){
    if(!spriteMap.has(url)){
        //todo improve
        let img = new Image(); 
        img.src = url;

        spriteMap.set(url, img);
    }

    return spriteMap.get(url);
}

export function init(canvas, init, mainLoop) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    console.log("Hello");
    console.log(typeof mainLoop);
    loop = mainLoop;
    init();
    run();
}

function run(){
    Time.update();
    requestAnimationFrame(this.run);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

