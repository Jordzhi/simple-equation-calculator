"use strict"

let btn1 = document.querySelector(".OneBtn");
btn1.addEventListener("click", ()=>{
    let a = document.querySelector(".OneFined").value;
    let b = document.querySelector(".answerOne").value;
    console.log("a = ", a);
    console.log("b = ", b);

    let x;
    let ev = document.querySelector(".Main-Event").value;
    let anp = document.querySelector(".OneAnsw");
    console.log("Event: ", ev);
    console.log(typeof(ev));

    if(ev == "+"){
        x = b - a;
        console.log(x);
        anp.innerHTML = "Ответ: " + x;
    }
    if(ev == "-") {
        x = a - b;
        console.log(x);
        anp.innerHTML = "Ответ: " + x;
    }
    if( ev == "*") {
        x = b / a;
        console.log(x);
        anp.innerHTML = "Ответ: " + x;
    }
    if ( ev == "/") {
        x = a / b;
        console.log(x);
        anp.innerHTML = "Ответ: " + x;
    }
});
