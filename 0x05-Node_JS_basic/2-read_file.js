const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
  } catch (error) {
    // If an error occurs (e.g., file not found), throw a custom error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

