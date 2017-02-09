import * as framework from './framework';

let img = framework.loadImage("/images/spritesheet-demo.png");
let sprite = new framework.Sprite(null, "/images/spritesheet-demo.png", 0, 0);

function init() {
}

function loop() {
    sprite.draw();
    console.log("Hello, world!");
}

framework.init(document.getElementById("canvas"), init, loop);
