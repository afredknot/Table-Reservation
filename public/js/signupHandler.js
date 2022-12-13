const signup = document.querySelector("#submit");
const fName = document.querySelector("#firstName-signup");
const lName = document.querySelector("#lastName-signup");
const email = document.querySelector("#email-signup");
const phoneNum = document.querySelector("#phone-signup");
const passOne = document.querySelector("#passOne-signup");
const passTwo = document.querySelector("#passTwo-signup");
const errorEl = document.querySelector("#errorText");
const successEl = document.querySelector("#successText")

function handleSubmit(e) {
    e.preventDefault();

    const data = {
        first_name: fName.value.trim(),
        last_name: lName.value.trim(),
        email: email.value.trim().toLowerCase(),
        phone_number: phoneNum.value,
        password: ""
    };

    if(passOne.value == passTwo.value) {
        data.password = passOne.value;
        successEl.innerHTML=""
    } else {
        errorEl.innerHTML = "Error: Your passwords must match!";
        passOne.value = "";
        passTwo.value = "";
        passOne.focus();
    };

    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": 'application/json'}
    })
    .then((response) => {
        if(response.status == 200) {
            successEl.innerHTML =`Hurray! Your account was created!`;
            return document.location.replace('/');
        } else {
            errorEl.innerHTML = `Error: Code ${response.status}.`
        };
    })
}

signup.addEventListener("click", handleSubmit)


