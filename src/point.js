class Point {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.acceleration = random(3, 10);
    this.velocity = createVector(
      this.acceleration * random(),
      this.acceleration * random()
    );
  }

  update() {
    this.position.add(this.velocity);
    this.checkEdges();
  }

  checkEdges() {
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }
}
