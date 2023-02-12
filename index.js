const cardNumber = document.getElementById("card-number");
const ccNumberDisplay = document.getElementById("cc-number-display");

const cardName = document.getElementById("name");
const nameDisplay = document.getElementById("name-display");

const expMonth = document.querySelector(".exp-month");
const expYear = document.querySelector(".exp-year");
const expMonthDisplay = document.getElementById("exp-month-display");
const expYearDisplay = document.getElementById("exp-year-display");

const cvc = document.getElementById("cvc");
const cvcDisplay = document.getElementById("cvc-display");

const cardNumberError = Array.from(document.querySelectorAll(".card-number-error"));
const cardFormatError = document.getElementById("card-format-error");

const submitBtn = document.getElementById("btn");

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

const formatNumber = (number) => number.split("").reduce((start, next, index) => {
    if (index !== 0 && !(index % 4)) {
        start += " ";
    }
    return start + next;
}, "");

cardNumber.addEventListener("keyup", function(e) {
    cardNumber.value = formatNumber(cardNumber.value.replaceAll(" ", ""));
    ccNumberDisplay.textContent = e.target.value;
});

cardName.addEventListener("keyup", function(e) {
    nameDisplay.textContent = e.target.value.toUpperCase();
});

expMonth.addEventListener("keyup", function(e) {
    var maxChars = 2;
    if (e.target.value.length >= maxChars) {
        e.target.value = e.target.value.substr(0, maxChars);
    }
    expMonthDisplay.textContent = e.target.value;
});

expYear.addEventListener("keyup", function(e) {
    var maxChars = 2;
    if (e.target.value.length >= maxChars) {
        e.target.value = e.target.value.substr(0, maxChars);
    }
    expYearDisplay.textContent = e.target.value;
})

cvc.addEventListener("keyup", function(e) {
    var maxChars = 3;
    if (e.target.value.length >= maxChars) {
        e.target.value = e.target.value.substr(0, maxChars);
    }
    cvcDisplay.textContent = e.target.value;
})

submitBtn.addEventListener("click", function(e) {
    const isEmpty = Array.from(inputs).some(input => !input.value);
    if (isEmpty) {
        e.preventDefault();
        cardNumberError.forEach(card => {
            card.textContent = "Can't be blank";
        });
    } else if (!/^[0-9 -]+$/.test(cardNumber.value)) {
        e.preventDefault();
        cardFormatError.textContent = "Wrong format, numbers only";
    } else {
        form.style.display = "none";
        document.getElementById("success-container").style.display = "block";
        e.preventDefault();
    }
});