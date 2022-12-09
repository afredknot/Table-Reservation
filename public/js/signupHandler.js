const signupForm = document.querySelector("#submitForm");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNum = document.querySelector("#phoneNum");
const passOne = document.querySelector("#passOne");
const passTwo = document.querySelector("#passTwo");
const errorEl = document.querySelector("#errorText");

function handleSubmit(e) {
    e.preventDefault();

    const data = {
        firstName: fName.value.trim(),
        lastName: lName.value.trim(),
        email: email.value.trim().toLowerCase(),
        phoneNumber: phoneNum.value,
        password: ""
    };

    if(passOne.value == passTwo.value) {
        body.password = passOne.value;
    } else {
        errorEl.innerHTML = "Error: Your passwords must match!";
        passOne.value = "";
        passTwo.value = "";
        passOne.focus();
    };

    fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": 'application/json'}
    })
    .then((response) => {
        if(response.status == 200) {
            document.location.replace('/');
            alert("Account Creation Successful.");
        } else {
            errorEl.innerHTML = `Error: Code ${response.status}.`
        };
    });
}

signupForm.on("submit", handleSubmit)