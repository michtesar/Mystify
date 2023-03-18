let w = window.innerWidth;
let h = window.innerHeight;
let canvas;

let polygons = [];

function setup() {
  canvas = createCanvas(w, h);
  colorMode(HSB);
  for (let i = 0; i < config.nPolygons; i++) {
    polygons.push(
      new Polygon(config.nVertices, config.nShadows, config.changeColors)
    );
  }
}

function draw() {
  background(0, 0, 10);
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
