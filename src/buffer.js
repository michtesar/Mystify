class CircularBuffer {
  constructor(bufferLength) {
    this.buffer = [];
    this.bufferLength = bufferLength;
  }

  push(element) {
    this.buffer.push(element);
  }

  getAll() {
    return this.buffer;
  }
}
