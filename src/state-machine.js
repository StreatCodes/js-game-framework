let _states = [];

export function get(){
    return _states[_states.length - 1];
}

export function push(scene){
    _states.push(scene);
}

export function pop(){
    _states.pop();
}

export class Scene{
    constructor(){
        this.init();
    }

    init(){

    }

    update(){

    }

    draw(){

    }
}