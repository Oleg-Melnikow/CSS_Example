function validation() {
    let form = document.getElementById("form")
    let email = document.getElementById("email").value
    let text = document.getElementById("text")
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address in Valid."
        text.style.color = "#00ff00"
    } else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = "#ff0000"
    }
    if(email === ""){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}