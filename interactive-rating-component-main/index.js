const form = document.querySelector(".box")
const options = document.querySelectorAll(".option")

options.forEach(option => option.addEventListener("click", setActive))

function setActive(e) {
    const options = document.querySelectorAll(".option")
    options.forEach(option => {
        option.classList.remove("active");
    });

    e.target.classList.add("active")
}




form.addEventListener("submit", showBox)

function showBox(e) {
    e.preventDefault()

    const selectedOption = document.querySelector(".active")
    const selectedNum = selectedOption.textContent

    showThankYou(selectedNum)
}



function showThankYou(number) {
    form.innerHTML = ''
    let thankyousection = `<div class="thankyou"><img src="./images/illustration-thank-you.svg">
                            <p class="result">You selected ${number} out of 5</p>
                            <h1>Thank you!</h1>
                            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                        </div>`
    form.insertAdjacentHTML("beforeend", thankyousection)
}
