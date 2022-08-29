const fs = require('fs');

fs.copyFile('./napi.node', '../public/native/win32/napi.node', error => {
  if (error) {
    throw error;
  } else {
    console.log('File has been moved to another folder.');
  }
});
fs.copyFile('./napi.node', '../public/native/linux/napi.node', error => {
  if (error) {
    throw error;
  } else {
    console.log('File has been moved to another folder.');
  }
});
fs.copyFile('./napi.node', '../public/native/darwin/napi.node', error => {
  if (error) {
    throw error;
  } else {
    console.log('File has been moved to another folder.');
  }
});
