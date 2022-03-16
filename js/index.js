
let btn_txt = document.querySelectorAll(".btn_hide_txt");
let btn_arrow = document.querySelectorAll(".btn_hide_arrow");
let btn_change = document.querySelectorAll(".btn_hide");
let hide_case = document.querySelectorAll(".wrap_size");
// btn_change.addEventListener('click', function () {
//     if (btn_txt.innerText == "see more") {
//         btn_txt.innerText = "hide";
//         btn_arrow.style = "transform: rotate(180deg);";
//         document.querySelectorAll(".wrap_size").classList.remove("hideCase");
//     } else {
//         btn_txt.innerText = "see more";
//         btn_arrow.style = "transform: rotate(360deg);";
//         document.querySelectorAll(".wrap_size").classList.add("hideCase");
//     }
// })

btn_change.forEach(function(element,index){
    element.addEventListener('click', function () {
        if (btn_txt[index].innerText == "see more") {
            btn_txt[index].innerText = "hide";
            btn_arrow[index].style = "transform: rotate(180deg);";
            hide_case[index].classList.remove("hideCase");
        } else {
            btn_txt[index].innerText = "see more";
            btn_arrow[index].style = "transform: rotate(360deg);";
            hide_case[index].classList.add("hideCase");
        }
    })
    })
// function myFunction() {
//     btn_txt.innerHTML = "hide";
//     btn_arrow.style = "transform: rotate(180deg);";
// }q

