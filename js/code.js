let bottom = document.querySelector(".scroll");
let days = document.querySelector(".day");
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let skills = document.querySelector(".skills .container");
let contents = document.querySelectorAll(".content");
let stats = document.querySelector(".stats .container");
let boxes = document.querySelectorAll(".stats .container .main-box .box p");
let stander = false;
window.onscroll = function() {
    if (window.scrollY >= 600) {
    bottom.style.display = "block"
    } else {
    bottom.style.display = "none"
    }
    // skills Animation
    if (window.scrollY >= skills.offsetTop - 400) {
        contents.forEach((content) => {
            content.style.width = content.dataset.width;
        });
    }
    // stats Animation
    if (window.scrollY >= stats.offsetTop - 400) {
        if (!stander) {
            boxes.forEach((box) => {
                let count = setInterval(() => {
                    box.textContent ++;
                    if (box.textContent == box.dataset.goal) {
                        clearInterval(count);
                    }
                }, 2000 / box.dataset.goal);
                stander = true;
            });
        }
    }
} 

bottom.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
let countDate = new Date("Dec 1, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let calc_date = countDate - dateNow;
    let calc_day = Math.floor(calc_date / (1000 * 60 * 60 * 24))
    days.innerHTML = calc_day < 10 ? `0${calc_day}` : calc_day;
    let calc_hour = Math.floor((calc_date % (1000 * 60 * 60 * 24) / 1000 / 60 / 60))
    hours.innerHTML = calc_hour< 10 ? `0${calc_hour}` : calc_hour;
    let calc_minute = Math.floor((calc_date % (1000 * 60 * 60) / 1000 / 60))
    minutes.innerHTML = calc_minute < 10 ? `0${calc_minute}` : calc_minute;
    let calc_second = Math.floor((calc_date % (1000 * 60) / 1000))
    seconds.innerHTML = calc_second < 10 ? `0${calc_second}` : calc_second;
    if (calc_date < 0) {
        clearInterval(counter);
    }
}, 1000);
