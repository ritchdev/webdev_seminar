var faq_questions = document.getElementsByClassName("faq_question");
var faq_indicators = document.getElementsByClassName("show_answer");

function showAnswer(index) {
    var faq_answers = document.getElementsByClassName("faq_answer");
    var answer = faq_answers[index];
    var indicator = faq_indicators[index];

    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = "0";
        answer.style.display = "none";
        indicator.innerHTML = "+";
    } else {
        answer.style.display = "block";
        answer.style.maxHeight = answer.scrollHeight + "px";
        indicator.innerHTML = "x";
        
    }
}