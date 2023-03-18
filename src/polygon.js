class Polygon {
  constructor(nVertrices) {
    this.nVertices = nVertrices;
    this.vertices = this.createVertices(nVertrices);
    this.color = randomColor();
  }

  createVertices(nVertices) {
    let vertices = [];
    for (let i = 0; i < nVertices; i++) {
      vertices.push(new Point());
    }
    return vertices;
  }

  update() {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].update();
    }
  }

  draw() {
    smooth();
    stroke(this.color);
    noFill();
    beginShape();
    for (let i = 0; i < this.vertices.length; i++) {
      vertex(this.vertices[i].position.x, this.vertices[i].position.y);
    }
    endShape(CLOSE);
  }
}
