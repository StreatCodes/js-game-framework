import * as framework from './framework';

let img = framework.loadImage("images/spritesheet-demo.png");
let sprite = new framework.Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", 0, 0);

function init() {
}

function loop() {
    sprite.draw();
}

framework.init(document.getElementById("canvas"), init, loop);
