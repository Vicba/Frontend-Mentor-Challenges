const field = document.querySelector("input")
const submitBtn = document.querySelector(".submit")
const errMsg = document.querySelector(".errMsg")

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', (e) => {
        checkInput(e)
    });
});

function checkInput(e) {
    e.preventDefault()

    let input = false
    if (field.value == "") {
        field.style.border = "solid 2px hsl(0, 100%, 74%)";
        errMsg.textContent = "Your email address cannot be empty";
    } else {
        errMsg.textContent = "";
        input = true
    }

    let emailCorrect = false
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(field.value)) {
        field.style.border = "solid 1px hsl(246, 25%, 77%)";
        emailCorrect = true
    } else if (field.value != "") {
        errMsg.textContent = "Looks like this is not an email";
    }

    if (input && emailCorrect) {
        console.log("logged in")
    }
}