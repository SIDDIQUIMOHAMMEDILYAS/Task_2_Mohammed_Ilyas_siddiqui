function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}
function closeMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.remove('active');
}