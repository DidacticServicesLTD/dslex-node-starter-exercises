import fs from 'fs';

fs.writeFile('test.txt', 'hello from Didactic Services', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
