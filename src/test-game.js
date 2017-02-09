import * as framework from './framework';

let img = framework.loadImage("images/spritesheet-demo.png");
console.log(document.getElementById("canvas").getContext('2d'));
let sprite = new framework.Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", 0, 0);

function init() {
}

function loop() {
    sprite.draw();
    console.log("Hello, world!");
}

framework.init(document.getElementById("canvas"), init, loop);
