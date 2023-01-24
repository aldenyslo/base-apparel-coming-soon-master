const form = document.querySelector(".email-submission");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
    if (email.value === "" || !email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        e.preventDefault();
        errorMsg.classList.add("show");
        form.classList.add("error");
    } else {
    errorMsg.classList.remove("show");
    form.classList.remove("error");
    }
})