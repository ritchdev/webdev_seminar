//Question 1
let n = 0;
let container = document.getElementById("container");
let add_paragraph = document.getElementById("para_adder");

add_paragraph.addEventListener('click', function(){
    n++;
    const newElement = document.createElement("p");
    newElement.innerText = "New Paragraph "+n;
    container.appendChild(newElement);
})


//Question 2
let list = document.getElementById("list");

list.addEventListener('click', function(e){
    e.target.style.display = "none";
})


//Question 3
let name_field = document.getElementById('name');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    const newElement = document.createElement("p");
    newElement.innerText = "Hi, "+name_field.value;
    form.appendChild(newElement);
})


//Question 4
let color_changer = document.getElementById('color_changing_div');

color_changer.addEventListener('mouseenter', function(){
    color_changer.style.backgroundColor = "red";
})

color_changer.addEventListener('mouseleave', function(){
    color_changer.style.backgroundColor = "lightgray";
})