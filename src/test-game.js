import * as framework from './framework';
import Victor from 'Victor';

let img = framework.loadImage("images/spritesheet-demo.png");
let sprite = new framework.Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", new Victor(0,0), [], 12);
sprite.addFrame(new Victor(0, 89), new Victor(34, 44));
sprite.addFrame(new Victor(32, 89), new Victor(36, 44));
sprite.addFrame(new Victor(71, 89), new Victor(49, 44));
sprite.addFrame(new Victor(124, 89), new Victor(38, 44));
sprite.addFrame(new Victor(161, 89), new Victor(29, 44));
sprite.addFrame(new Victor(194, 89), new Victor(27, 44));
sprite.addFrame(new Victor(225, 89), new Victor(29, 44));
sprite.addFrame(new Victor(258, 89), new Victor(39, 44));
sprite.addFrame(new Victor(301, 89), new Victor(33, 44));
sprite.addFrame(new Victor(336, 89), new Victor(27, 44));

function init() {
}

function loop() {
    sprite.draw();
}

framework.init(document.getElementById("canvas"), init, loop);
