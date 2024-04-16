let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let pm = document.querySelector(".pm");
let dots = document.querySelectorAll(".semi-colon");

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

    s =  s < 10 ? `0${s}` : s;
    m =  m < 10 ? `0${m}` : m;
    h =  h < 10 ? `0${h}` : h;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    dotsBlinking(s);
};

setInterval(clock , 1000);