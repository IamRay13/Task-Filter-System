function filterSelection(category) {
    const elements = document.getElementsByClassName("filterDiv");

    // Show all elements if 'all' is selected
    if (category === "all") category = "";

    // Loop through all elements and hide or show based on the category
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"; // Hide all elements by default
        if (elements[i].className.indexOf(category) > -1) {
            elements[i].style.display = "block"; // Show elements matching the category
        }
    }

    // Update active button styling
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");
}
