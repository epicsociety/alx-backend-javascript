const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }

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

    // Prepare the response data
    let responseData = 'This is the list of our students\n';
    responseData += `Number of students: ${lines.length - 1}\n`;

    // Log the count and list of students for each field
    Object.keys(fieldCounts).forEach((field) => {
      responseData += `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}\n`;
    });

    // Send the response
    res.send(responseData);
  });
});

const port = 1245;
app.listen(port);

module.exports = app;
