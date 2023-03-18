let w = window.innerWidth;
let h = window.innerHeight;
let canvas;

let polygons = [];

function setup() {
  canvas = createCanvas(w, h);
  for (let i = 0; i < config.nPolygons; i++) {
    polygons.push(new Polygon(config.nVertices));
  }
}

function draw() {
  background(28);
  for (let i = 0; i < config.nPolygons; i++) {
    polygons[i].draw();
    polygons[i].update();
  }
}

window.onresize = function () {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
};
