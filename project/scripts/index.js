// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    // overlay.classList.toggle('active');

    // Prevent body scroll when sidebar is open
    // document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        // overlay.classList.remove('active');
        // document.body.style.overflow = '';
    });
});