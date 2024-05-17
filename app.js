let clockDate = document.querySelector("#clock-date");
let clockTime = document.querySelector(".clock-time");


let intervalID;

const clock = () => {
    let systemTime = new Date().toLocaleTimeString();
    let systemTime2 = new Date().toLocaleDateString();
    clockTime.innerText = systemTime;
    clockDate.innerText = systemTime2;
};

intervalID = setInterval(clock , 1000);