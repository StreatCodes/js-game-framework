import * as fw from "./framework";

function loop() {
    console.log("Hello, world!");
}

fw.run(document.getElementById("canvas") as HTMLCanvasElement, loop);
