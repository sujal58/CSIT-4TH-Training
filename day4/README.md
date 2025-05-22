# Day-5: Js Basics

## Assignment 1: Number Frequency Counter

### Functions

- **countFrequency(array)**
  - Returns a frequency array that counts how often each number appears in the input array.
  - Uses a loop to iterate through the array and track the frequency of each number.
  - Classifies numbers based on their frequency:
    - Appears 4 times: "frequent"
    - Appears 3 times: "common"
    - Appears 1 time: "rare"

### Loops

- Use a loop to:
  - Iterate through the array to count the frequency of each number.
  - Print the classification ("frequent", "common", or "rare") for each unique number based on its frequency.

### Expected Output

<!-- ```bash
Number 2: frequent (appears 4 times)
Number 5: common (appears 3 times)
Number 7: rare (appears 1 time)
``` -->

## Assignment 2: Student Grade Management Assignment

## Functions

- **addStudent(name, grade)**

  - Adds student's name and grade to respective arrays.
  - Validations:
    - Name must not be empty.
    - Grade must be between 0 and 100 (inclusive).

- **calculateAverage(grades)**

  - Calculates and returns the average of grades using a loop.

- **determineClassPerformance(average)**
  - Returns class performance based on the average:
    - "A" for ≥ 90
    - "B" for 80–89
    - "C" for 70–79
    - "D" for 60–69
    - "F" for < 60

## Loops

- Use loops to:
  - Sum grades for the average calculation.
  - Print each student's name and corresponding grade.

## Expected Output

<!-- ```bash
Student added: Alice, Grade: 95
Student added: Bob, Grade: 82
Student added: Charlie, Grade: 78
Invalid input: Empty name provided
Invalid input: Grade 101 is out of range

Student List:
Alice: 95
Bob: 82
Charlie: 78

Class Average: 85
Class Performance: B
``` -->
