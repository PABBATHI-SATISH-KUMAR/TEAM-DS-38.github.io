// Save data in localStorage when user selects an option
function saveSelection(key, value) {
    localStorage.setItem(key, value);
}

// Retrieve data from localStorage
function getSelection(key) {
    return localStorage.getItem(key) || "";
}

// Year selection example
document.querySelectorAll("button[name='year']").forEach(button => {
    button.addEventListener("click", function() {
        saveSelection("year", this.value);
    });
});

// Semester selection example
document.querySelectorAll("button[name='semester']").forEach(button => {
    button.addEventListener("click", function() {
        saveSelection("semester", this.value);
    });
});

// Display selected year/semester on next page
document.addEventListener("DOMContentLoaded", function() {
    const year = getSelection("year");
    const semester = getSelection("semester");
    if (year) {
        document.querySelector("#selected-year").textContent = `Year: ${year}`;
    }
    if (semester) {
        document.querySelector("#selected-semester").textContent = `Semester: ${semester}`;
    }
});
