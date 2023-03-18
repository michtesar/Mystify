class Polygon {
  constructor(nVertrices, nShadows, changeColors) {
    this.nVertices = nVertrices;
    this.nShadows = nShadows;
    this.changeColors = changeColors;
    this.vertices = this.createVertices(nVertrices);
    this.colorOffset = random(1000);
    this.color = changeColors
      ? this.generateColor()
      : color(random(0, 255), 255, 255);
  }

  createVertices(nVertices) {
    let vertices = [];
    for (let i = 0; i < nVertices; i++) {
      vertices.push(new Point());
    }
    return vertices;
  }

  generateColor() {
    this.colorOffset += config.colorStep;
    let hue = map(noise(this.colorOffset), 0, 1, 0, 255);
    return color(hue, 255, 255);
  }

  update() {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].update();
    }
    if (this.changeColors) {
      this.color = this.generateColor();
    }
  }

  draw() {
    smooth();
    for (let shadow = 0; shadow < this.nShadows + 1; shadow++) {
      strokeWeight(1);
      stroke(this.color);
      noFill();
      beginShape();
      for (let i = 0; i < this.vertices.length; i++) {
        let shadowVertex = this.calculateShadow(
          this.vertices[i].position,
          this.vertices[i].velocity,
          shadow * 4
        );
        vertex(shadowVertex.x, shadowVertex.y);
      }
      endShape(CLOSE);
    }
  }

  calculateShadow(position, velocity, offset = 1) {
    let pos = position.copy();
    let vel = velocity.copy();
    return pos.sub(vel.add(offset, offset));
  }
}
