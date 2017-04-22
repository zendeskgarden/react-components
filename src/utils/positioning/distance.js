const distance = (p1, p2) =>
  Math.sqrt(Math.pow(p2.left - p1.left, 2) + Math.pow(p2.top - p1.top, 2));

export default distance;
