"use strict";
var fw = require("./framework");
function loop() {
    console.log("Hello, world!");
}
fw.run(document.getElementById("canvas"), loop);
