let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let pm = document.querySelector(".pm");
let dots = document.querySelectorAll(".semi-colon");
let clockDiv = document.querySelector("#clock-div");
clockDiv.style.position = `relative`;

let date = document.createElement("p");
date.innerText = `some text here`;
date.style.color = `white`;
date.style.position = `absolute`;
date.style.top = `11rem`;
date.style.left = `0`;
clockDiv.append(date);

const dotsBlinking = (second) => {
    if(second % 2 === 0){
        for (let index = 0; index < dots.length; index++) {
            dots[index].style.color = `rgb(6, 29, 59)`;
        }
    } 
    else{
        for (let index = 0; index < dots.length; index++) {
            dots[index].style.color = `white`;
        }
    };
};

const clock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12) {
        h -= 12;
    }

    if(h < 12) {
        pm.innerText = `am`;
    };

    s =  s < 10 ? `0${s}` : s;
    m =  m < 10 ? `0${m}` : m;
    h =  h < 10 ? `0${h}` : h;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    dotsBlinking(s);
};

setInterval(clock , 1000);