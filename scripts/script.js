/*
    Student Name: Rachel Gray
    Student Number: c0575209
    File Name: script.js
    Date: 2025-Nov-30
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close menu when a link is clicked (mobile view)
document.querySelectorAll("#menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu-links").style.display = "none";
    });
});
