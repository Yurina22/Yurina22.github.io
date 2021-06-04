document.addEventListener('DOMContentLoaded', function () {
    const accountMenuButton = document.getElementById('account-menu-toggle');
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const accountMenu = document.getElementById('account-menu');
    const mobileMenu = document.getElementById('mobile-menu');


    accountMenuButton.addEventListener('click', function () {
        accountMenuButton.classList.toggle('active');
        accountMenu.classList.toggle('active');
    });

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
    mobileMenu.addEventListener('click', function (e) {
        const target = e.target;

        if (target.classList.contains('js-menu-overlay')) {
            mobileMenu.classList.remove('active');
        }
    })

});