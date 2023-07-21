const path = require('path');
function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);
  console.log('File Extension:', fileExtension);
}
// Example usage
const filePath = '/path/to/file.txt';
extractFileExtension(filePath);
