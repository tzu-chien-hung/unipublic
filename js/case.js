const ul = document.getElementById('case_slider_all_container');
const li = document.querySelectorAll('.slider_big_img');
let index = 0;
let left_index = 1;

// ================ cloneNode(true)複製(最後一張圖li.length - 1)
const li_1 = li[li.length - 1].cloneNode(true);
// console.log(li_1)

// ================ 在 第一個參數(Y)的前面 新增一個節點(X) insertBefore(x,y)  
ul.insertBefore(li_1,li[0])

// ================ 自動輪播
// ================ ˋ${}ˋ 內容會被視為js

setInterval(function(){
    
    index++;
    ul.style.transform = `translateX(${-100 + (-index * 100)}%)`;
    // console.log(index % (li.length/2));
    if((index) % (li.length/2) == 0){
        ul.style.left = left_index * 500 +"%";
        left_index++
    }
},2000)

//左右按鍵切換圖片

