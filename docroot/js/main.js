$('.dropdown-submenu ul.dropdown-menu li a').on('touchstart', function(e) {
    e.preventDefault();
    window.location.href = $(this).attr('href');
})