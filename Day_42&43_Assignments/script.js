//Question 1

let paragraph = document.querySelector("#chameleon_paragraph");
let changer = document.querySelector("#change_paragraph");

changer.addEventListener('click', function () {
    paragraph.innerHTML = "Text Changed";
})


//Question 2
let bg_changer = document.getElementById("toggle_bgc");
let isWhite = true;

bg_changer.addEventListener('click', function () {
    if (isWhite)
        document.body.style.backgroundColor = "lightblue";
    else
        document.body.style.backgroundColor = "white";
    isWhite = !isWhite;
})


//Question 3
let div = document.getElementById("task3_div");
let hider = document.getElementById("hider");
let isVisible = true;

hider.addEventListener('click', function () {
    if (isVisible){
        div.style.display = "none";
        hider.innerHTML = "Make the above text reappear!";
    }
    else{
        div.style.display = "block";
        hider.innerHTML = "Make the above text disappear!";
    }
    isVisible = !isVisible;
})


//Question 4
let counter_btn = document.getElementById("counter");
let counter_display = document.getElementById("count");
let clicks = 0;

counter_btn.addEventListener('click', function(){
    clicks++;
    counter_display.innerHTML = clicks;
})


//Question 5
let display = document.getElementById("text_display");
let input = document.getElementById("user_input");

input.addEventListener('input', function(){
    display.innerHTML = input.value;
})


//Question 6
let img = document.getElementById("hover_change");

img.addEventListener("mouseover", function(){
    img.src = "image2.jpg";
})

img.addEventListener("mouseout", function(){
    img.src = "image.png";
})


//Question 7
let p = document.getElementById("adjustable_text");
let dropdown = document.getElementById("font_dropdown");
let submit_btn = document.getElementById("submit_button");
let size = "12px";

submit_btn.addEventListener('click', function(){
    size = String(dropdown.value);
    p.style.fontSize = size;
})


//Question 8
let list = document.getElementById("dynamic_list");
let input_item = document.getElementById("item_name");
let submit_item = document.getElementById("submit_item");

submit_item.addEventListener('click', function(){
    const newElement = document.createElement("li");
    newElement.innerText = input_item.value;
    list.appendChild(newElement);
})
