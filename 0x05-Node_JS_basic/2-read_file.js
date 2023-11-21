const fs = require('fs');

function countStudents(path) {
  try {
    const result = fs.readFileSync(path, 'utf8');
    const data = result.split('\n');
    const nonEmptyLines = data.filter((line) => line.trim() !== '');
    const students = [];
    const columnNames = nonEmptyLines.shift().split(',');

    const fieldCounts = {};
    const fieldLists = {};

    for (let i = 0; i < nonEmptyLines.length; i += 1) {
      const fields = nonEmptyLines[i].split(',');
      const student = {};

      for (let j = 0; j < columnNames.length; j += 1) {
        const columnName = columnNames[j].trim();
        const fieldValue = fields[j].trim();
        student[columnName] = fieldValue;
      }

      students.push(student);

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

    console.log(`Number of students: ${students.length}`);

    // Log the count and list of students for each field
    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
    });
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
