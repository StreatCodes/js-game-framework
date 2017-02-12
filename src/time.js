let _prevTime = new Date().getTime() / 1000.0;;
let _time = new Date().getTime() / 1000.0;
let _dtVal = 0;

export function update(){
    _prevTime = _time;
    _time = new Date().getTime() / 1000.0;
    _dtVal = _time - _prevTime;
}

//returns time since start of last frame
export function dt() {
    return _dtVal;
}