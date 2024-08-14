# 0x04-TypeScript

## Project Overview

This project focuses on building a strong foundation in TypeScript, covering a range of key concepts and tasks that will help you master the language. The project consists of several mandatory tasks, each building upon the previous one, guiding you through the process of defining interfaces, working with classes, handling advanced types, and more.

## Tasks

### 0. Creating an Interface for a Student
- **Objective**: Define a `Student` interface and render a table using Vanilla JavaScript.
- **Requirements**:
  - Define `Student` interface with `firstName`, `lastName`, `age`, and `location`.
  - Create an array of students and render their details in a table.

### 1. Let's Build a Teacher Interface
- **Objective**: Define a `Teacher` interface with various attributes.
- **Requirements**:
  - Define `Teacher` interface with `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), and `location`.
  - Allow additional attributes dynamically.

### 2. Extending the Teacher Interface
- **Objective**: Extend the `Teacher` interface to create a `Directors` interface.
- **Requirements**:
  - Add `numberOfReports` attribute to the `Directors` interface.

### 3. Printing Teachers
- **Objective**: Implement a `printTeacher` function.
- **Requirements**:
  - Define a function that returns the first letter of the first name and the full last name.
  
### 4. Writing a Class
- **Objective**: Implement a `StudentClass` with methods for homework and display.
- **Requirements**:
  - Define a class with `firstName`, `lastName`, `workOnHomework`, and `displayName` methods.

### 5. Advanced Types Part 1
- **Objective**: Create interfaces for `Director` and `Teacher`, and implement classes with specific methods.
- **Requirements**:
  - Implement `Director` and `Teacher` classes with methods `workFromHome`, `getCoffeeBreak`, and respective work tasks.
  - Create a `createEmployee` function that returns either a `Director` or `Teacher` based on the salary.

### 6. Creating Functions Specific to Employees
- **Objective**: Write functions to identify `Director` and execute work based on employee type.
- **Requirements**:
  - Implement `isDirector` and `executeWork` functions.

### 7. String Literal Types
- **Objective**: Implement a `Subjects` string literal type and a `teachClass` function.
- **Requirements**:
  - Define `Subjects` type and return specific strings based on the input.

### 8. Ambient Namespaces
- **Objective**: Create ambient namespaces and declare types for third-party libraries.
- **Requirements**:
  - Define types for `RowID` and `RowElement`.
  - Implement type declarations for CRUD operations.

### 9. Namespace & Declaration Merging
- **Objective**: Implement a `Subjects` namespace and use declaration merging to enhance interfaces.
- **Requirements**:
  - Create classes and interfaces within the `Subjects` namespace with specific attributes and methods for different subjects.

### 10. Update Main File with Subjects
- **Objective**: Set up and use subjects and teachers in the main TypeScript file.
- **Requirements**:
  - Export constants for subjects and log the requirements and availability of teachers.

### 11. Brand Convention & Nominal Typing
- **Objective**: Implement brand convention using interfaces for `MajorCredits` and `MinorCredits`.
- **Requirements**:
  - Define interfaces with a `brand` property to uniquely identify each type.
  - Implement functions to sum major and minor credits.

## Requirements
- Use TypeScript and ensure no type errors when running `npm run build`.
- Follow coding standards as per provided ESLint configurations.
- The project must be completed and manually reviewed by the given deadline.

## Project Structure
- **Repository**: `alx-backend-javascript`
- **Directory**: `0x04-TypeScript`

---

Follow the above tasks sequentially to complete the project successfully. Each task builds upon the previous one, reinforcing your understanding of TypeScript and its advanced features.
