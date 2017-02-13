import * as Input from './input';
import * as Time from './time';
import Victor from 'Victor';

let _canvas;
let _context;
let _spriteMap = new Map();
let _loop;

export function loadImage(url) {
    if (!_spriteMap.has(url)) {
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

function run() {
    Time.update();
    _context.clearRect(0, 0, _canvas.width, _canvas.height);
    _loop();

    //draw something
    requestAnimationFrame(run);
}


export class GameObject {
    constructor(sprite) {
        this.sprite = sprite;
    }

    update() {

    }

    draw() {
        this.sprite.draw();
    }
}

export class Sprite {
    constructor(context, url, pos, cords = [], fps = 24) {
        this.context = context;
        this.image = loadImage(url);
        this.pos = pos;
        this.cords = cords;
        this.allowedFrameTime = 1.0 / fps;
        this.frame = 0;
        this.frameTime = 0.0;
    }

    //add animation frame
    addFrame(sourceVec, dimensionVec) {
        this.cords.push({
            source: sourceVec,
            dimensions: dimensionVec
        });
    }

    draw() {
        //draws image to context
        this.context.drawImage(this.image,
            this.cords[this.frame].source.x,        //source X
            this.cords[this.frame].source.y,        //source Y
            this.cords[this.frame].dimensions.x,    //source width
            this.cords[this.frame].dimensions.y,    //source height
            this.pos.x,                             //destination X
            this.pos.y,                             //destination Y
            this.cords[this.frame].dimensions.x,    //destination width
            this.cords[this.frame].dimensions.y);   //destination height

        this.frameTime += Time.dt();

        //handle animation
        if (this.frameTime > this.allowedFrameTime) {
            this.frameTime = 0.0;
            this.frame++;
            this.frame > this.cords.length - 1 ? this.frame = 0 : null;
        }
    }
}