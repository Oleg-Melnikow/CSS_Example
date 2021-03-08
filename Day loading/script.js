let progressBar = document.querySelector('.progress-bar'),
    timeSpan = document.querySelector('.time');

const addZeroToNumber = (num) => num <= 9 ? `0${num}` : num;

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}

setInterval(() => {
    let widthBar = getSecondsToday() / 846;
    progressBar.style.width = widthBar.toFixed(2) + "%";
    let date = new Date(),
        nowHour = date.getHours(),
        nowMinutes = date.getMinutes();
    timeSpan.textContent = `${addZeroToNumber(nowHour)}:${addZeroToNumber(nowMinutes)}`;
},1000)