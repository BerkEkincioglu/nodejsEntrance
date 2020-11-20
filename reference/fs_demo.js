const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created.');
// });

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Test \n', (err) => {
//   if (err) throw err;
//   console.log('File written to.');

//   //File append
//   fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Test2', (err) => {
//     if (err) throw err;
//     console.log('File written to.');
//   });
// });

// Read file
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'test.txt'),
  path.join(__dirname, '/test', 'test2.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed');
  }
);
