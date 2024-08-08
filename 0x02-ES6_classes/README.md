Here’s a brief README for your ES6 Classes project:

---

# ES6 Classes

## Overview

This project focuses on mastering ES6 classes and their advanced features, including inheritance, static methods, and metaprogramming. It includes several tasks to implement and test various class-based structures using JavaScript ES6.

## Tasks

1. **ClassRoom**: Implement a class `ClassRoom` with a constructor that accepts `maxStudentsSize`.  
   - **File**: `0-classroom.js`
   - **Main**: `0-main.js`

2. **Initialize Rooms**: Create a function `initializeRooms` that returns an array of `ClassRoom` objects with specific sizes.  
   - **File**: `1-make_classrooms.js`
   - **Main**: `1-main.js`

3. **HolbertonCourse**: Implement `HolbertonCourse` class with getters and setters for `name`, `length`, and `students`.  
   - **File**: `2-hbtn_course.js`
   - **Main**: `2-main.js`

4. **Currency**: Implement `Currency` class with `displayFullCurrency` method to format currency details.  
   - **File**: `3-currency.js`
   - **Main**: `3-main.js`

5. **Pricing**: Extend `Currency` with `Pricing` class, adding methods to display price and convert currency.  
   - **File**: `4-pricing.js`
   - **Main**: `4-main.js`

6. **Building**: Create an abstract `Building` class requiring derived classes to implement `evacuationWarningMessage`.  
   - **File**: `5-building.js`
   - **Main**: `5-main.js`

7. **SkyHighBuilding**: Extend `Building` to create `SkyHighBuilding`, overriding `evacuationWarningMessage`.  
   - **File**: `6-sky_high.js`
   - **Main**: `6-main.js`

8. **Airport**: Implement `Airport` class with a custom `toString` method.  
   - **File**: `7-airport.js`
   - **Main**: `7-main.js`

9. **HolbertonClass**: Implement `HolbertonClass` with custom casting to `Number` and `String`.  
   - **File**: `8-hbtn_class.js`
   - **Main**: `8-main.js`

10. **Fix Hoisting**: Correct issues in `9-hoisting.js` to ensure classes and methods work as expected.  
    - **File**: `9-hoisting.js`
    - **Main**: `9-main.js`

11. **Car**: Implement `Car` class with a method `cloneCar` to clone car instances.  
    - **File**: `10-car.js`
    - **Main**: `10-main.js`

## Setup

1. **Install NodeJS 12.11.x**
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run Tests**
    ```bash
    npm run full-test
    ```

## Linting

Ensure your code adheres to style guidelines:
```bash
npm run lint
```

## Repository

- **GitHub Repository**: [alx-backend-javascript](https://github.com/your-repo/alx-backend-javascript)
- **Directory**: `0x02-ES6_classes`

---