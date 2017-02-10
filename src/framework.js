import * as Input from './input';
import * as Time from './time';
import 'Victor';

let vec = new Victor(100, 200);
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

    loop = mainLoop;
    init();
    run();
}

function run(){
    Time.update();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    loop();

    //draw something
    requestAnimationFrame(this.run);
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
    constructor(context, url, pos, cords){
        this.context = context;
        this.image = loadImage(url);
        this.x = x;
        this.y = y;

        //TODO coords
    }

    draw(){
        this.context.drawImage(this.image, this.x, this.y, 100, 100);
        // dx, dy, dWidth, dHeight);
    }
}

