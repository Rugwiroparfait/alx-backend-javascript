# 0x05. NodeJS Basics

## Tasks

### 0. Executing Basic JavaScript with Node.js
**File:** `0-console.js`  
- Create a function named `displayMessage` that prints a string argument to `STDOUT`.

### 1. Using Process `stdin`
**File:** `1-stdin.js`  
- Create a program that asks for the user's name and outputs:  
  ```
  Welcome to Holberton School, what is your name?
  Your name is: [INPUT]
  ```

### 2. Reading a File Synchronously with Node.js
**File:** `2-read_file.js`  
- Create a function `countStudents` that reads a CSV file, counts students, and logs the number of students in each field.

### 3. Reading a File Asynchronously with Node.js
**File:** `3-read_file_async.js`  
- Similar to Task 2, but the file reading should be asynchronous and return a Promise.

### 4. Create a Small HTTP Server Using Node's HTTP Module
**File:** `4-http.js`  
- Create a basic HTTP server that listens on port `1245` and responds with `Hello Holberton School!` for any endpoint.

### 5. Create a More Complex HTTP Server Using Node's HTTP Module
**File:** `5-http.js`  
- Extend the server to handle two routes: `/` (returns `Hello Holberton School!`) and `/students` (returns the list of students from the CSV file).

### 6. Create a Small HTTP Server Using Express
**File:** `6-http_express.js`  
- Create an Express server that listens on port `1245` and responds with `Hello Holberton School!` for the `/` endpoint.

### 7. Create a More Complex HTTP Server Using Express
**File:** `7-http_express.js`  
- Extend the Express server to handle two routes: `/` (returns `Hello Holberton School!`) and `/students` (returns the list of students from the CSV file).

### 8. Organize a Complex HTTP Server Using Express
**Directory:** `full_server/`  
- Organize the server into controllers, routes, and utilities:
  - **Controller:** Handles requests for homepage and student data.
  - **Routes:** Define endpoints for the homepage and students.
  - **Utils:** Read and process the CSV file asynchronously.

## Important Files
- `package.json`: Manages project dependencies.
- `.eslintrc.js`: Configures ESLint to maintain coding standards.
- `babel.config.js`: Configures Babel to transpile ES6+ syntax for compatibility.

## Author:
NSANZIMANA  RUGWIRO Dominique Parfait

