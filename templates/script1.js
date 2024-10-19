document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".container");

    // Fade in effect on page load
    pages.forEach((page) => {
        page.style.opacity = 0;
        setTimeout(() => {
            page.style.opacity = 1;
            page.style.transition = "opacity 0.5s ease-in-out";
        }, 100);
    });

    // Smooth page navigation
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const form = button.closest("form");

            if (form.checkValidity()) {
                document.body.style.opacity = 0;
                setTimeout(() => {
                    form.submit();
                }, 500); // Delay for transition effect
            } else {
                form.reportValidity();
            }
        });
    });
});
