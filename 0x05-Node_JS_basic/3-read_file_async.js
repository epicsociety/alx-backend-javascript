const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        const columnNames = lines.shift().split(',');
        const fieldCounts = {};
        const fieldLists = {};

        for (let i = 0; i < lines.length; i += 1) {
          const fields = lines[i].split(',');
          const student = {};

          for (let j = 0; j < columnNames.length; j += 1) {
            const columnName = columnNames[j].trim();
            const fieldValue = fields[j].trim();
            student[columnName] = fieldValue;
          }

          const { field } = student;
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
            fieldLists[field].push(student.firstname);
          } else {
            fieldCounts[field] = 1;
            fieldLists[field] = [student.firstname];
          }
        }

        console.log(`Number of students: ${lines.length}`);

        // Log the count and list of students for each field
        Object.keys(fieldCounts).forEach((field) => {
          console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
