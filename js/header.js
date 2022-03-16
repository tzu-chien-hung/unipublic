let nav_title = document.querySelectorAll(".menu_item");
let nav_title_h2 = document.querySelectorAll(".main1_title");

nav_title.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: nav_title_h2[index].offsetTop - 100,
            behavior: "smooth",

        })
    })
})