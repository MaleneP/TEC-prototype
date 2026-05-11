// Javascript for min Dropdown menu //
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('mainDropdown');
    const toggle = document.getElementById('dropdownToggle');
    const closeBtn = document.getElementById('dropdownClose');

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // NY: luk med kryds
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.remove('active');
        });
    }

    // Luk hvis man klikker udenfor
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});



function toggleMenu(e) {
    e.preventDefault();
    dropdown.classList.toggle('active');
    // NY LINJE:
    document.body.classList.toggle('no-scroll', dropdown.classList.contains('active'));
}

toggle.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);