const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there's an error (like file not found), reject the promise
        reject(new Error('Cannot load the database'));
      } else {
        try {
          // Split the file content into rows
          const rows = data.split('\n').filter((row) => row.trim() !== '');

          // Check if there are students to process (after filtering empty lines)
          if (rows.length <= 1) {
            throw new Error('Cannot load the database');
          }

          // Remove the header (first line of CSV)
          const header = rows[0].split(',');
          const students = rows.slice(1);

          // Initialize object to store students by field
          const fields = {};

          // Process each student
          students.forEach((studentRow) => {
            const student = studentRow.split(',');

            // Ensure the row has the right number of columns
            if (student.length === header.length) {
              const field = student[3];  // The field of the student is in the 4th column
              const firstName = student[0];

              // Group students by field
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstName);
            }
          });

          // Output the total number of students
          console.log(`Number of students: ${students.length}`);

          // Output the number of students in each field and their names
          for (const field in fields) {
            if (Object.hasOwnProperty.call(fields, field)) {
              const studentNames = fields[field];
              console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
            }
          }

          // Resolve the promise when finished
          resolve();
        } catch (error) {
          // If there's a problem during processing, reject the promise
          reject(new Error('Cannot load the database'));
        }
      }
    });
  });
}

module.exports = countStudents;

