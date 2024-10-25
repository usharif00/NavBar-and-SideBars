
document.getElementById("bellIcon").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});


document.getElementById("menuIcon").addEventListener("click", function() {
    const settingsSidebar = document.getElementById("settingsSidebar");
    const overlay = document.getElementById("overlay");
    
    settingsSidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});


document.getElementById("overlay").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const settingsSidebar = document.getElementById("settingsSidebar");
    const overlay = document.getElementById("overlay");
    
    sidebar.classList.remove("active");
    settingsSidebar.classList.remove("active");
    overlay.classList.remove("active");
});
