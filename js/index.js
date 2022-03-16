// =================    main0 箭頭點好下滑特效  ===============//

let go_work_btn = document.getElementById('go_work_btn');
let works = document.getElementById('main_arrow').offsetTop - 100;

go_work_btn.addEventListener('click', function (){
    window.scrollTo({
        top: works,
        behavior: "smooth",
    })
});
// =================    main1 works五個按鍵的背景特效  ===============//
let works_case = document.querySelectorAll(".tag_item");

works_case.forEach(function (element, index) {
    element.addEventListener('click', function () {
        for (let i = 0; i < works_case.length; i++) {
            works_case[i].classList.remove("active")
        }
        works_case[index].classList.add("active");
    })
});

// =================    main1 works五個按鍵滑動特效  =================//
let case_name = document.querySelectorAll(".case_name");
let title = document.querySelectorAll(".case__title");
case_name.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: title[index].offsetTop - 140,
            behavior: "smooth",
        })
    })
});
// =================    see more btn 滑動特效 =====================//

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

btn_change.forEach(function (element, index) {
    element.addEventListener('click', function () {
        if (btn_txt[index].innerText == "see more") {
            btn_txt[index].innerText = "hide";
            btn_arrow[index].style = "transform: rotate(180deg);";
            hide_case[index].classList.remove("hideCase");
        } else {
            btn_txt[index].innerText = "see more";
            btn_arrow[index].style = "transform: rotate(360deg);";
            hide_case[index].classList.add("hideCase");
            window.scrollTo({
                top: title[index].offsetTop - 140,
                // behavior: "smooth",
            })
        }
    })
});




// =================    see more btn 滑動特效 =====================//

// for(let i = 0; i < input.length; i++){
//     if(input[i].value){
//         label[i].classList.add('active3');
//     }else{
//         label[i].classList.remove('active3');
//     }
// }

let input = document.getElementById("input_name");
let span = document.getElementById("client_email_input");
console.log(span)

var rules = new RegExp('[0-9]');
if(input === ''){
    span.classList.add('active3');
}

// console.log(input)