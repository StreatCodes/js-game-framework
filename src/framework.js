import * as Input from './input';
import * as Time from './time';
import Victor from 'Victor';

let _canvas;
let _context;
let _spriteMap = new Map();
let _loop;
let _timer;

export function loadImage(url){
    if(!_spriteMap.has(url)){
        //todo improve
        let img = new Image(); 
        img.src = url;

        _spriteMap.set(url, img);
    }

    return _spriteMap.get(url);
}

export function init(canvas, init, mainLoop) {
    _canvas = canvas;
    _context = canvas.getContext("2d");

    _loop = mainLoop;
    init();
    run();
}

function run(){
    Time.update();
    _context.clearRect(0, 0, _canvas.width, _canvas.height);
    _loop();

    //draw something
    requestAnimationFrame(run);
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
        this.pos = pos;
        this.cords = cords;

        //TODO coords
    }

    draw(){
        this.context.drawImage(this.image, this.pos.x, this.pos.y);
        // dx, dy, dWidth, dHeight);
    }
}

