const fields = document.querySelectorAll("input")
const submitBtn = document.querySelector(".submit")


document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', (e) => {
        checkInput(e)
    });
});


function checkInput(e) {
    e.preventDefault()

    let input = false
    for (let i = 0; i <= fields.length - 1; i++) {
        if (fields[i].value == "") {
            fields[i].style.border = "solid 2px hsl(0, 100%, 74%)";
            fields[i].style.background = "url('./images/icon-error.svg') 93% no-repeat";
            fields[i].nextElementSibling.textContent = fields[i].getAttribute("placeholder") + " cannot be empty";
        } else {
            fields[i].style.border = "solid 1px  hsl(246, 25%, 77%)";
            fields[i].style.background = "none";
            fields[i].nextElementSibling.innerHTML = "";
            input = true
        }
    }

    let emailCorrect = false
    let email = document.querySelector("input[type=email]");
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
        email.style.border = "solid 1px hsl(246, 25%, 77%)";
        emailCorrect = true
    } else if (email.value != "") {
        email.nextElementSibling.textContent = "Looks like this is not an email";
        email.style.color = "hsl(0, 100%, 74%)";
        email.style.background = "url('./images/icon-error.svg') 95% no-repeat"
    }

    if (input && emailCorrect) {
        console.log("logged in")
    }
}