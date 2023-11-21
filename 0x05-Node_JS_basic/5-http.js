const http = require('http');
const fs = require('fs'); // Add this line to require the 'fs' module

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Respond with the message for the root path
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Read the database file asynchronously
    const databasePath = process.argv[2]; // Get the database path from the command line arguments
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database\n');
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const columnNames = lines[0].split(',');

        const fieldCounts = {};
        const fieldLists = {};

        for (let i = 1; i < lines.length; i += 1) {
          const fields = lines[i].split(',');
          const student = {};

          for (let j = 0; j < columnNames.length; j += 1) {
            const columnName = columnNames[j].trim();
            const fieldValue = fields[j].trim();
            student[columnName] = fieldValue;
          }

          // Count students in each field
          const { field } = student;
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
            fieldLists[field].push(student.firstname);
          } else {
            fieldCounts[field] = 1;
            fieldLists[field] = [student.firstname];
          }
        }

        // Log the list of students
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${lines.length - 1}\n`);

        // Log the count and list of students for each field
        Object.keys(fieldCounts).forEach((field) => {
          res.write(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}\n`);
        });

        res.end();
      }
    });
  } else {
    // Set the response headers for unknown paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });

    // Respond with a 404 message for unknown paths
    res.end('Not Found\n');
  }
});
app.listen(port);

module.exports = app;
