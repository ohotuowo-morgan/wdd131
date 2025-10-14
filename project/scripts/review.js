document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// localStorage counter
let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;