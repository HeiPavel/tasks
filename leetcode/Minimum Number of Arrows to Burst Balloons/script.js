const findMinArrowShots = (points) => {
  let arrows = 1, min = Infinity;
  points.sort((a, b) => a[1] - b[1]);
  for (const point of points) {
      if (point[0] > min) {
          arrows++;
          min = point[1];
      } else min = Math.min(min, point[1]);
  }
  return arrows;
}