# Project: Unit Testing in JavaScript

## Overview

This project involves writing unit tests in JavaScript using various tools and libraries, such as Mocha, Chai, and Sinon. The goal is to test different types of functions, including asynchronous functions and functions that interact with APIs. The tasks include creating unit tests, spies, stubs, and performing integration tests with a small Node.js server.

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library
- **Objective**: Write a simple unit test using Mocha and Node's built-in `assert` module.
- **Function**: `calculateNumber(a, b)` - rounds `a` and `b` and returns their sum.
- **Test file**: `0-calcul.test.js` tests rounding behavior and the sum calculation.
- **Command**: `npm test 0-calcul.test.js`

### 1. Combining Descriptions
- **Objective**: Add functionality to the `calculateNumber` function to support operations like `SUM`, `SUBTRACT`, and `DIVIDE`.
- **Function**: `calculateNumber(type, a, b)` - rounds `a` and `b`, then performs the operation based on `type`.
- **Test file**: `1-calcul.test.js` uses `describe` to organize tests for the different operations.
- **Command**: `npm test 1-calcul.test.js`

### 2. Basic Test using Chai Assertion Library
- **Objective**: Use Chai’s `expect` instead of `assert` for better readability.
- **Function**: Copy and modify the previous `calculateNumber` function to `2-calcul_chai.js`.
- **Test file**: Rewrite the test cases in `2-calcul_chai.test.js` using Chai.
- **Command**: `npm test 2-calcul_chai.test.js`

### 3. Spies
- **Objective**: Use Sinon spies to track function calls.
- **Function**: `sendPaymentRequestToApi(totalAmount, totalShipping)` calls `Utils.calculateNumber('SUM', totalAmount, totalShipping)`.
- **Test file**: `3-payment.test.js` verifies if `Utils.calculateNumber` is called with correct arguments using `sinon.spy`.
- **Command**: `npm test 3-payment.test.js`

### 4. Stubs
- **Objective**: Use Sinon stubs to replace function implementation during testing.
- **Function**: `sendPaymentRequestToApi` - stub `Utils.calculateNumber` to always return `10`.
- **Test file**: `4-payment.test.js` uses stubs to control the behavior of `Utils.calculateNumber`.
- **Command**: `npm test 4-payment.test.js`

### 5. Hooks
- **Objective**: Use `beforeEach` and `afterEach` hooks to set up conditions for each test.
- **Function**: `sendPaymentRequestToApi` for two different sets of input.
- **Test file**: `5-payment.test.js` uses hooks to clean up spies between tests.
- **Command**: `npm test 5-payment.test.js`

### 6. Async Tests with Done
- **Objective**: Write tests for asynchronous functions.
- **Function**: `getPaymentTokenFromAPI(success)` - returns a promise based on the `success` parameter.
- **Test file**: `6-payment_token.test.js` tests the result of `getPaymentTokenFromAPI(true)` using the `done` callback.
- **Command**: `npm test 6-payment_token.test.js`

### 7. Skip Failing Tests
- **Objective**: Use Mocha’s `.skip()` to bypass failing tests temporarily.
- **Test file**: `7-skip.test.js` demonstrates the use of skipped tests in a suite.
- **Command**: `npm test 7-skip.test.js`

### 8. Basic Integration Testing
- **Objective**: Perform integration tests on a small Express server.
- **Server**: `api.js` serves a basic endpoint returning "Welcome to the payment system".
- **Test file**: `api.test.js` checks the status code and response body for the root endpoint.
- **Command**: `npm test api.test.js`

### 9. Regex Integration Testing
- **Objective**: Add an endpoint with a parameter validated by a regular expression.
- **Server**: `GET /cart/:id` returns "Payment methods for cart :id".
- **Test file**: `api.test.js` tests both valid and invalid `id` values.
- **Command**: `npm test api.test.js`

### 10. Deep Equality & POST Integration Testing
- **Objective**: Test deep equality and a POST endpoint.
- **Server**: `GET /available_payments` returns an object, and `POST /login` returns "Welcome :username".
- **Test file**: `api.test.js` tests both the structure of the response object and the POST body.
- **Command**: `npm test api.test.js`

## Repository Structure
```
- 0x06-unittests_in_js/
    - 0-calcul.js
    - 0-calcul.test.js
    - 1-calcul.js
    - 1-calcul.test.js
    - 2-calcul_chai.js
    - 2-calcul_chai.test.js
    - 3-payment.js
    - 3-payment.test.js
    - 4-payment.js
    - 4-payment.test.js
    - 5-payment.js
    - 5-payment.test.js
    - 6-payment_token.js
    - 6-payment_token.test.js
    - 7-skip.test.js
    - 8-api/
        - api.js
        - api.test.js
        - package.json
    - 9-api/
        - api.js
        - api.test.js
        - package.json
    - 10-api/
        - api.js
        - api.test.js
        - package.json
```

## Instructions
- Install required dependencies using `npm install`.
- Run individual tests with `npm test <test file>`.
- Ensure all tests pass with no warnings or errors.

## Key Libraries Used
- **Mocha**: Testing framework for running tests.
- **Chai**: Assertion library for behavior-driven development (BDD).
- **Sinon**: Library for spies, stubs, and mocks.
- **Express**: Web framework for integration tests.

---


