const fs = require('fs');
const path = require('path');

// Create a file
fs.writeFile('example.txt', 'This is an example file.', (err) => {
  if (err) throw err;
  console.log('File created.');
});

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

// Append to a file
fs.appendFile('example.txt', '\nThis is some appended text.', (err) => {
  if (err) throw err;
  console.log('Text appended to the file.');
});

// Delete a file
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted.');
});

// Rename a file
fs.rename('example.txt', 'renamed-example.txt', (err) => {
  if (err) throw err;
  console.log('File renamed.');
});

// List files/directories in a directory
const directoryPath = './';
fs.readdir(directoryPath, (err, files) => {
  if (err) throw err;
  console.log('Files and directories in', directoryPath);
  files.forEach((file) => {
    console.log(file);
  });
});
