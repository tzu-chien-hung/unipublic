const ul = document.getElementById('case_slider_all_container');
const li = document.querySelectorAll('.slider_big_img');
let index = 0;
let left_index = 1;

// ================ cloneNode(true)複製(最後一張圖li.length - 1)
const li_1 = li[li.length - 1].cloneNode(true);
const li_2 = li[0].cloneNode(true);
// console.log(li_1)

// ================ 在 第一個參數(Y)的前面 新增一個節點(X) insertBefore(x,y)  
ul.insertBefore(li_1, li[0])
ul.appendChild(li_2)
// ================ 自動輪播
// ================ ˋ${}ˋ 內容會被視為js
let carousel = setInterval(function () {
    index++;
    ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
    // console.log(index % (li.length/2));
    if ((index) % (li.length) == 0) {
        ul.style.left = left_index * 500 + "%";
        left_index++;
    }
}, 2000);



const start = function () {
    carousel = setInterval(function () {
        index++;
        ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
        // console.log(index % (li.length/2));
        if ((index) % (li.length) == 0) {
            ul.style.left = left_index * 500 + "%";
            left_index++;
        }
    }, 2000);
}

// carousel();

//左右按鍵切換圖片

let arrow_left = document.getElementById('slider_arrow_left');
let arrow_right = document.getElementById('slider_arrow_right');
// console.log(arrow_left)

arrow_left.addEventListener('click', function () {
    clearInterval(carousel);
    index--;
    ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
    if ((index - 4) % (li.length) == 0) {
        ul.style.left = (left_index - 2) * 500 + "%";
        left_index--;
    }
    console.log(index, left_index, (index - 4) % (li.length))
    start();

});

arrow_right.addEventListener('click', function () {
    clearInterval(carousel);
    index++;
    ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
    if ((index) % (li.length) == 0) {
        ul.style.left = left_index * 500 + "%";
        left_index++;
    }
    start();
});


//小圖片點選後，顯示對應大圖片

let slider_img_small = document.querySelectorAll('.slider_img_small');
// console.log(slider_img_small);

slider_img_small.forEach(function (element, index1) {
    element.addEventListener('click', function () {
        clearInterval(carousel);
        index = index1;
        ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
        left_index = 1;
        ul.style.left = left_index * 0 + "%";


        start();
    })
});