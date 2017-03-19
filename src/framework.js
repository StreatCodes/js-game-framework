import * as Input from './input';
import * as Time from './time';
import * as StateMachine from './state-machine';
import Victor from 'Victor';

export {
    Input,
    Time,
    StateMachine,
    Victor
};

let _canvas;
let _context;
let _spriteMap = new Map();
let _loop;

/**
 * Loads image into map, multiple calls with the same URL will only download the image once
 * 
 * @export
 * @param {string} url
 * @returns {Image} Returns the loaded Image
 */
export function loadImage(url) {
    if (!_spriteMap.has(url)) {
        //todo improve
        let img = new Image();
        img.src = url;

        _spriteMap.set(url, img);
    }

    return _spriteMap.get(url);
}

/**
 * Initialize the game framework, creating a loop and running StateMachine.() repeatably
 * 
 * @export
 * @param {HTMLCanvasElement} canvas
 */
export function init(canvas) {
    _canvas = canvas;
    _context = canvas.getContext("2d");

    run();
}

/**
 * Internal command which manages the game loop
 */
function run() {
    Time.update();
    _context.clearRect(0, 0, _canvas.width, _canvas.height);
    StateMachine.get().update();
    StateMachine.get().draw();

    //draw something
    requestAnimationFrame(run);
    Input.update();
}


/**
 * All drawable entities derivce from this class
 * 
 * @export
 * @class GameObject
 */
export class GameObject {
    /**
     * Creates an instance of GameObject.
     * 
     * 
     * 
     * @memberOf GameObject
     */
    constructor() {
    }

    /**
     * 
     * 
     * 
     * @memberOf GameObject
     */
    update() {

    }

    /**
     * 
     * 
     * 
     * @memberOf GameObject
     */
    draw() {
    }
}

/**
 * Creates drawable game object, with the ability to animate
 * 
 * @export
 * @class Sprite
 */
export class Sprite {
    /**
     * Creates an instance of Sprite.
     * 
     * @param {CanvasRenderingContext2D} context
     * @param {string} url
     * @param {Victor} pos
     * @param {Array} [cords=[]]
     * @param {number} [fps=24]
     * 
     * @memberOf Sprite
     */
    constructor(context, url, pos, cords = [], fps = 24) {
        this.context = context;
        this.image = loadImage(url);
        this.pos = pos;
        this.cords = cords;
        this.allowedFrameTime = 1.0 / fps;
        this.frame = 0;
        this.frameTime = 0.0;
        this.animations = {
            TestAnimation: {
                name: "testing"
            }
        };
        this.animation = null;
    }

    //add animation frame
    /**
     * Adds animation coords at runtime, you probably want to load from a json object instead
     * 
     * @param {Object} animation
     * @param {Victor} sourceVec
     * @param {Victor} dimensionVec
     * 
     * @memberOf Sprite
     */
    addFrame(animation, sourceVec, dimensionVec) {
        if (this.animations[animation] === undefined) {
            this.animations[animation] = [];
        }

        this.animations[animation].push({
            source: sourceVec,
            dimensions: dimensionVec
        });
    }

    /**
     * Sets the animation to display
     * 
     * @param {string} animation
     * 
     * @memberOf Sprite
     */
    setAnimation(animation) {
        this.animation = this.animations[animation];
    }


    /**
     * Draws sprite to screen based on animation frame etc.
     * 
     * 
     * @memberOf Sprite
     */
    draw() {
        //draws image to context
        this.context.drawImage(this.image,
            this.animation[this.frame].source.x, //source X
            this.animation[this.frame].source.y, //source Y
            this.animation[this.frame].dimensions.x, //source width
            this.animation[this.frame].dimensions.y, //source height
            this.pos.x, //destination X
            this.pos.y, //destination Y
            this.animation[this.frame].dimensions.x, //destination width
            this.animation[this.frame].dimensions.y); //destination height

        this.frameTime += Time.dt();

        //handle animation
        if (this.frameTime > this.allowedFrameTime) {
            this.frameTime = 0.0;
            this.frame++;
            this.frame > this.animation.length - 1 ? this.frame = 0 : null;
        }
    }
}