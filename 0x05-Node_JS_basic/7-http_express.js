const express = require('express');
const fs = require('fs');
const path = require('path');

// Function to read the CSV file asynchronously and return a Promise
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      if (lines.length <= 1) {
        reject(new Error('No valid student data found'));
        return;
      }

      const students = {};
      const header = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(',');
        const field = studentData[header.length - 1].trim();

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(studentData[0].trim());
      }

      const totalStudents = lines.length - 1;
      resolve({ totalStudents, students });
    });
  });
}

// Create an instance of an Express app
const app = express();

// Route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the "/students" URL
app.get('/students', (req, res) => {
  const filePath = path.resolve(__dirname, process.argv[2]);

  countStudents(filePath)
    .then(({ totalStudents, students }) => {
      let output = `This is the list of our students\nNumber of students: ${totalStudents}\n`;

      for (const [field, studentList] of Object.entries(students)) {
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }

      res.send(output.trim());
    })
    .catch((err) => {
      res.send('This is the list of our students\n' + err.message);
    });
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for external use
module.exports = app;

