/*const fs = require('fs');
function checkFilePath(filePath) {
  fs.access(filePath, fs.constants.F_OK, (error) => {
    if (error) {
      console.error('File does not exist:', filePath);
    } else {
      console.log('File exists:', filePath);
    }
  });
}
// Example usage
const filePath = '/path/to/file.txt';
checkFilePath(filePath);*/
const fs = require('fs');

function checkFileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: File does not exist.');
    } else {
      console.log('Success: File exists.');
    }
  });
}

// Example usage:
const filePath = '/path/to/your/file.txt';
checkFileExists(filePath);
