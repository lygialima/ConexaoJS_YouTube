var PIXI = require('pixi.js');

//Test that Pixi is working
console.log(PIXI);

let renderer = PIXI.autoDetectRenderer(256,256); //Create the renderer

document.body.appendChild(renderer.view); //Add the canvas to the HTML document

let stage = new PIXI.Container(); //Create a container object called the "stage"

renderer.render(stage); //Tell the "renderer" to "render" the "stage"

renderer.view.style.border = "1px dashed black";
