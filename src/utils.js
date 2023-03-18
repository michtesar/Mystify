function randomColor(minBrightness = 125) {
  return color(
    random(minBrightness, 255),
    random(minBrightness, 255),
    random(minBrightness, 255)
  );
}
