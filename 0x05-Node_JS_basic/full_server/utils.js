import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const lines = data.split('\n').filter((line) => line.trim().length > 0);

      if (lines.length <= 1) {
        resolve(students);
        return;
      }

      const header = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(',');
        const field = studentData[header.length - 1].trim();

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(studentData[0].trim());
      }

      resolve(students);
    });
  });
}
