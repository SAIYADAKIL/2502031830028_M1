import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

// EJS setup
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crud_app")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection failed:", error));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
});

// Model
const Student = mongoose.model("Student", studentSchema);

// Home page
app.get("/", (req, res) => {
  res.render("home");
});

// Add page
app.get("/add", (req, res) => {
  res.render("add");
});

// Add student
app.post("/add", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    await Student.create({
      name,
      email,
      course,
    });

    res.redirect("/show");
  } catch (error) {
    console.log(error);
    res.send("Error while adding student");
  }
});

// Show students
app.get("/show", async (req, res) => {
  try {
    const students = await Student.find();

    res.render("show", {
      students,
    });
  } catch (error) {
    console.log(error);
    res.send("Error while showing students");
  }
});

// Open edit page
app.get("/edit/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.send("Student not found");
    }

    res.render("update", {
      student,
    });
  } catch (error) {
    console.log(error);
    res.send("Error while opening edit page");
  }
});

// Update student
app.post("/update/:id", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    await Student.findByIdAndUpdate(req.params.id, {
      name,
      email,
      course,
    });

    res.redirect("/show");
  } catch (error) {
    console.log(error);
    res.send("Error while updating student");
  }
});

// Delete student
app.get("/delete/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.redirect("/show");
  } catch (error) {
    console.log(error);
    res.send("Error while deleting student");
  }
});

// Contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

// 404 page
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});