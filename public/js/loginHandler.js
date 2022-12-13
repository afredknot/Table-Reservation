const loginEl = document.querySelector('.login-form');
const errorEl = document.querySelector("#errorText");
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return document.location.replace('/');
    } else {
      errorEl.innerHTML = `Failed to login.`;
    }
  }
};

loginEl.addEventListener('submit', loginFormHandler);
