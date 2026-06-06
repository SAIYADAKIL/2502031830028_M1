// Variables and data types
let studentName = "Akil";
let age = 19;
let isLearning = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Learning JavaScript:", isLearning);

// Function example
function showStudent() {
  document.getElementById("output").innerText = `Student: ${studentName}, Age: ${age}`;
}

// Condition example
function checkEvenOdd() {
  let number = 10;

  if (number % 2 === 0) {
    document.getElementById("output").innerText = `${number} is Even`;
  } else {
    document.getElementById("output").innerText = `${number} is Odd`;
  }
}

// Array and loop example
function showSubjects() {
  let subjects = ["HTML", "CSS", "JavaScript", "Bootstrap"];
  let result = "Subjects: ";

  for (let i = 0; i < subjects.length; i++) {
    result += subjects[i] + " ";
  }

  document.getElementById("output").innerText = result;
}

// Object example
let course = {
  title: "Web Development",
  duration: "7 Days",
  level: "Beginner"
};

console.log("Course Object:", course);
