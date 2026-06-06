const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    `;

    tableBody.appendChild(row);
  });
}

function clearErrors() {
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("courseError").innerText = "";
}

function validateForm(name, email, course) {
  let isValid = true;
  clearErrors();

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").innerText = "Valid email is required";
    isValid = false;
  }

  if (course === "") {
    document.getElementById("courseError").innerText = "Please select a course";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;

  if (!validateForm(name, email, course)) {
    return;
  }

  const student = {
    name,
    email,
    course
  };

  students.push(student);
  saveStudents();
  renderStudents();
  form.reset();
});

function deleteStudent(index) {
  students.splice(index, 1);
  saveStudents();
  renderStudents();
}

renderStudents();
