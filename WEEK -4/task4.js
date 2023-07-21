const path = require('path')
function arePathsEqual(filePath1, filePath2) {
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);
  return absolutePath1 === absolutePath2;
}
// Example usage
const filePath1 = '/path/to/file1.txt';
const filePath2 = '/path/to/file2.txt';
const pathsEqual = arePathsEqual(filePath1, filePath2);
console.log('Paths are equal:', pathsEqual);
