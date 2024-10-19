const courses = {
    "1st Year": {
        "Semester 1": ["Math 101", "Physics 101", "Computer Science 101"],
        "Semester 2": ["Math 102", "Chemistry 101", "Computer Science 102"]
    },
    "2nd Year": {
        "Semester 1": ["Math 201", "Physics 201", "Data Structures"],
        "Semester 2": ["Math 202", "Chemistry 201", "Algorithms"]
    }
    // Add more years and semesters
};

const teachers = {
    "Math 101": ["Teacher A", "Teacher B"],
    "Physics 101": ["Teacher C", "Teacher D"],
    "Computer Science 101": ["Teacher E", "Teacher F"]
    // Add more courses and teachers
};

// Display courses based on selected year and semester
document.addEventListener("DOMContentLoaded", function() {
    const year = getSelection("year");
    const semester = getSelection("semester");

    if (year && semester) {
        const courseList = courses[year][semester];
        const courseSelect = document.querySelector("#course-selection");

        courseList.forEach((course) => {
            const option = document.createElement("option");
            option.value = course;
            option.textContent = course;
            courseSelect.appendChild(option);
        });
    }
});

// Display teachers based on selected course
document.querySelector("#course-selection").addEventListener("change", function() {
    const selectedCourse = this.value;
    const teacherList = teachers[selectedCourse];
    const teacherSelect = document.querySelector("#teacher-selection");

    // Clear previous options
    teacherSelect.innerHTML = "";
    teacherList.forEach((teacher) => {
        const option = document.createElement("option");
        option.value = teacher;
        option.textContent = teacher;
        teacherSelect.appendChild(option);
    });
});
