let prevTime = new Date().getTime() / 1000.0;;
let time = new Date().getTime() / 1000.0;
let dtVal = 0;

export function update(){
    this.prevTime = this.time;
    this.time = new Date().getTime() / 1000.0;
    this.dtVal = this.time - this.prevTime;
}

//returns time since start of last frame
export function dt() {
    return this.dtVal;
}