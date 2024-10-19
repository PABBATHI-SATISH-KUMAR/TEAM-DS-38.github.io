document.addEventListener("DOMContentLoaded", function() {
    const year = getSelection("year");
    const semester = getSelection("semester");
    const course = getSelection("course");
    const teacher = getSelection("teacher");

    document.querySelector("#year-display").textContent = year ? `Year: ${year}` : "";
    document.querySelector("#semester-display").textContent = semester ? `Semester: ${semester}` : "";
    document.querySelector("#course-display").textContent = course ? `Course: ${course}` : "";
    document.querySelector("#teacher-display").textContent = teacher ? `Teacher: ${teacher}` : "";
});
