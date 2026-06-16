var menu_page = document.getElementById("menu-page")

function openMenu() {
    menu_page.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menu_page.style.display = "none";
    document.body.style.overflow = "auto";
}