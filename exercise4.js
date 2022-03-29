import fs from 'fs';

fs.readFile('test.html','utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

