import * as framework from './framework';
import * as stateMachine from './state-machine';
import Victor from 'Victor';

let stop = false;

window.addEventListener('keydown',(e)=>{
    if(e.keyCode === 27) stop = true;
});

class GameScene extends stateMachine.Scene{
    init(){
        framework.loadImage("images/spritesheet-demo.png");
        this.player = new framework.Sprite(document.getElementById("canvas").getContext('2d'), "images/spritesheet-demo.png", new Victor(0,0), [], 12);
        this.player.addFrame("run", new Victor(0, 89), new Victor(34, 44));
        this.player.addFrame("run", new Victor(32, 89), new Victor(36, 44));
        this.player.addFrame("run", new Victor(71, 89), new Victor(49, 44));
        this.player.addFrame("run", new Victor(124, 89), new Victor(38, 44));
        this.player.addFrame("run", new Victor(161, 89), new Victor(29, 44));
        this.player.addFrame("run", new Victor(194, 89), new Victor(27, 44));
        this.player.addFrame("run", new Victor(225, 89), new Victor(29, 44));
        this.player.addFrame("run", new Victor(258, 89), new Victor(39, 44));
        this.player.addFrame("run", new Victor(301, 89), new Victor(33, 44));
        this.player.addFrame("run", new Victor(336, 89), new Victor(27, 44));
        this.player.setAnimation("run");
    }

    update(){
        let v = new Victor(0, 0);
        //console.log(framework.Input.keyDown(framework.Input.Keys.A));
        
        //v.addX()
        //this.player.pos.
        if (stop === true) stateMachine.pop();
    }

    draw(){
        this.player.draw();
    }
}

let gameScene = new GameScene();
stateMachine.push(gameScene);
framework.init(document.getElementById("canvas"));
