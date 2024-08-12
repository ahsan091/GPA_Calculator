function toggleDropdown(id) {
    // Get all dropdown-content elements
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    // Loop through all dropdown-content elements and hide them
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id) {
            dropdowns[i].style.display = "none";
        }
    }

    // Toggle the display of the clicked dropdown-content
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
