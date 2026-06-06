function ProfileCard({ name, course, location }) {
  return (
    <section className="card">
      <h2>Props Example</h2>
      <div className="student-card">
        <h3>{name}</h3>
        <p>Course: {course}</p>
        <p>Location: {location}</p>
      </div>
    </section>
  );
}

export default ProfileCard;
