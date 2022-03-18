let nav_title = document.querySelectorAll(".menu_item");
let nav_title_h2 = document.querySelectorAll(".main1_title");
let checked_btn = document.getElementById("menuToggle_input");
nav_title.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: nav_title_h2[index].offsetTop - 100,
            behavior: "smooth",

        })
    })
});

nav_title.forEach(function (element, index1) {
    element.addEventListener('click', function () {
        checked_btn.checked = false;
    })
});