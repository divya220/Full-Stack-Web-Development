const path = require('path');
function extractDirectoryAndBaseName(filePath) {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);

  console.log('Directory Name:', directoryName);
  console.log('Base Name:', baseName);
}
// Example usage
const filePath = '/path/to/file.txt';
extractDirectoryAndBaseName(filePath);
