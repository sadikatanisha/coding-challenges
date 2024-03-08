const areaOrPerimeter = function (l, w) {
  // Check if it's a square or rectangle
  if (l === w) {
    // Square: return area (length * length)
    return l * l;
  } else {
    // Rectangle: return perimeter (2 * (length + width))
    return 2 * (l + w);
  }
};

// Example usage:
console.log(areaOrPerimeter(4, 4)); // Output: 16 (area of square)
console.log(areaOrPerimeter(4, 6)); // Output: 20 (perimeter of rectangle)
