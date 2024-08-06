# 0x01. ES6 Promises

## Project Overview

This project focuses on understanding and implementing JavaScript ES6 Promises. The main objectives are to learn how to create and handle promises, understand async/await, and manage asynchronous operations in JavaScript.

### Learning Objectives

By the end of this project, you should be able to:
- Understand what promises are, why they are used, and how to implement them.
- Use `then`, `resolve`, and `catch` methods effectively.
- Utilize every method of the `Promise` object.
- Implement `throw` and `try` for error handling.
- Use the `await` operator and `async` functions.

### Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All of your functions must be exported.

### Setup

#### Install NodeJS 12.11.x

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should print v12.11.1
npm -v     # should print 6.11.3
```

#### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json`:

```sh
npm install
```

### Configuration Files

- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

Ensure these files are present in your project directory and run `npm install` to install dependencies.

### Response Data Format

- `uploadPhoto` returns:
  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
  ```
- `createUser` returns:
  ```json
  {
    "firstName": "Guillaume",
    "lastName": "Salva"
  }
  ```

### Tasks

1. **Keep every promise you make and only make promises you can keep**
   - Return a Promise using the prototype function `getResponseFromAPI()`.
   - **File:** `0-promise.js`

2. **Don't make a promise...if you know you can't keep it**
   - Return a promise based on a boolean parameter.
   - **File:** `1-promise.js`

3. **Catch me if you can!**
   - Append handlers to a promise to manage its resolution and rejection.
   - **File:** `2-then.js`

4. **Handle multiple successful promises**
   - Resolve multiple promises and log the result.
   - **File:** `3-all.js`

5. **Simple promise**
   - Return a resolved promise with given object.
   - **File:** `4-user-promise.js`

6. **Reject the promises**
   - Return a rejected promise with an error message.
   - **File:** `5-photo-reject.js`

7. **Handle multiple promises**
   - Use functions from previous tasks and return an array of results.
   - **File:** `6-final-user.js`

8. **Load balancer**
   - Return the value from the promise that resolves first.
   - **File:** `7-load_balancer.js`

9. **Throw error / try catch**
   - Function to divide numbers and handle division by zero.
   - **File:** `8-try.js`

10. **Throw an error**
    - Function to handle math operations and log the process.
    - **File:** `9-try.js`

### Repository

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x01-ES6_promise`

### Notes

Ensure all code is linted and tested properly using ESLint and Jest. Follow best practices for JavaScript coding and handle all asynchronous operations efficiently using promises and async/await.

Happy coding!
