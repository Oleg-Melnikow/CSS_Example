const clock = () => {
    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
}

let interval = setInterval(clock, 1000)