let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let pm = document.querySelector(".pm");
let dots = document.querySelectorAll(".semi-colon");
let clockDiv = document.querySelector("#clock-div");
clockDiv.style.boxShadow = `0 0 10rem .1rem black`;
clockDiv.style.position = `relative`;

let newDiv = document.createElement("div");

let date = document.createElement("span");
let month = document.createElement("span");
let year = document.createElement("span");
let dateDot = document.createElement("span");
let dateDot2 = document.createElement("span");

date.innerText = new Date().getDate();
date.classList.add("date");

month.innerText = new Date().getMonth() + 1;
month.classList.add("date");

year.innerText = new Date().getFullYear();
year.classList.add("date");

dateDot.innerText = `.`;
dateDot.classList.add("date");

dateDot2.innerText = `.`;
dateDot2.classList.add("date");

newDiv.append(date);
newDiv.append(dateDot);
newDiv.append(month);
newDiv.append(dateDot2);
newDiv.append(year);

let accessNewDiv = document.querySelector("#clock-div").firstElementChild;
accessNewDiv.append(newDiv);
accessNewDiv.style.position = `relative`;

let setting = document.createElement("button");
setting.innerText = `Set Date and Time`;
setting.classList.add("position");

clockDiv.append(setting);

let menu = document.querySelector("#menu");
menu.classList.add("hide");

// const setDates = (inputsId) => {
//     // console.log(inputsId);

//     newDate = inputsId.id === `date-input-0` ? inputsId : newDate;
//     newMonth = inputsId.id === `date-input-1` ? inputsId : newMonth;
//     newYear = inputsId.id === `date-input-2` ? inputsId : newYear;

//     // okBtn.addEventListener("click", () => {
//     //     let currDate = new Date();
//     //     let updateDate = updatedDate.value;
//     //     currDate.setDate(updateDate);
//     //     date.innerText = currDate.getDate();

//     //     let currMonth = new Date();
//     //     let updateMonth = updatedMonth.value;
//     //     currMonth.setMonth(updateMonth);
//     //     month.innerText = currDate.getMonth();

//     //     let currYear = new Date();
//     //     let updateYear = updatedYear.value;
//     //     currYear.setFullYear(updateYear);
//     //     year.innerText = currYear.getFullYear();

//     //     console.log(`button was clicked`);
//     // });
// };

const dotsBlinking = (second) => {
    if (second % 2 === 0) {
        for (let index = 0; index < dots.length; index++) {
            dots[index].style.color = `rgb(6, 29, 59)`;
        }
    }
    else {
        for (let index = 0; index < dots.length; index++) {
            dots[index].style.color = `white`;
        }
    };
};

const clock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h > 12 ? h -= 12 : h;

    s = s < 10 ? `0${s}` : s;
    m = m < 10 ? `0${m}` : m;
    h = h < 10 ? `0${h}` : h;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    dotsBlinking(s);
};

setInterval(clock, 1000);

let dateBtn = document.querySelector("#date-btn");
let timeBtn = document.querySelector("#time-btn");

setting.addEventListener("click", () => {
    menu.classList.remove("hide");
    setting.classList.add("hide");
});

// let menu2 = document.querySelector("#menu-2");

dateBtn.addEventListener("click", () => {
    menu.classList.add("hide");

    // let btnDiv = document.createElement("div");
    // btnDiv.classList.add("d-flex", "justify-content-around", "align-items-center", "w-100", "mt-5")
    // clockDiv.append(btnDiv);

    // newDiv.classList.add("col-9");

    // let okBtn = document.createElement("button");
    // okBtn.innerText = `ok`.toUpperCase();
    // okBtn.classList.add("class-of-btns");

    // let cancelBtn = document.createElement("button");
    // cancelBtn.classList.add("class-of-btns");
    // cancelBtn.innerText = `cancel`.toUpperCase();

    // btnDiv.append(okBtn);
    // btnDiv.append(cancelBtn);

    // let childrenOfNewDiv = newDiv.children;
    // console.log(childrenOfNewDiv);

    // for (let index = 0; index < 5; index++) {
    //     if (index % 2 === 0 || index === 0) {
    //         newDiv.removeChild(newDiv.children[index]);
    //     }
    // }

    // while (newDiv.firstChild) {
    //     newDiv.removeChild(newDiv.firstChild);
    // }

    // let newDate;
    // let newMonth;
    // let newYear;

    // for (let index = 0; index < 3; index++) {
    //     let dateInput = document.createElement("input");
    //     dateInput.value = 0;
    //     dateInput.setAttribute("type", "number");
    //     dateInput.setAttribute("id", `date-input-${index}`);
    //     dateInput.classList.add("date-input");
    //     newDiv.append(dateInput);
        
    //     newDate = dateInput.id === `date-input-0` ? dateInput : null;
    //     newMonth = dateInput.id === `date-input-1` ? dateInput : null;
    //     newYear = dateInput.id === `date-input-2` ? dateInput : null;
        
    //     console.log(newDate);
    //     console.log(newMonth);
    //     console.log(newYear);
    // };
});