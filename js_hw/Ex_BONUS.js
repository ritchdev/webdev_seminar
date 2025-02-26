const length = document.getElementById("length");
const width = document.getElementById("width");
const result = document.getElementById("result");

function showArea(){
    var area = length.value * width.value;
    result.innerHTML = "The area of the given rectangle is: "+area;
}