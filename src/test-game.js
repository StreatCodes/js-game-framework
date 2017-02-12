import * as framework from './framework';
import Victor from 'Victor';

let img = framework.loadImage("images/spritesheet-demo.png");
let sprite = new framework.Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", new Victor(0,0), new Victor(200, 200));

function init() {
}

function loop() {
    sprite.draw();
}

framework.init(document.getElementById("canvas"), init, loop);
