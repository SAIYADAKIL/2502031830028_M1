const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  let isValid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").innerText = "Valid email is required";
    isValid = false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").innerText = "Phone must be 10 digits";
    isValid = false;
  }

  if (isValid) {
    result.style.display = "block";
    result.innerHTML = `<strong>Form submitted successfully!</strong><br>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`;
    form.reset();
  }
});
