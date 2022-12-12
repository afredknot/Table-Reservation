
const profile = document.querySelector("#profileBtn");

const displayUser = () =>
fetch("/api/users/profile", {
    method: "GET",
    body: req.session.id,
})
.then((response) => {
    if(response.status == 200) {
        document.location.replace(`/api/users/profile`)
    } else {
        errorEl.innerHTML = `Error: Code ${response.status}.`
    };
})

profile.addEventListener("click", displayUser);