const loginBtn = document.querySelector('#loginBtn');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try{  
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        return document.location.replace('/');
      };
    }
    catch(err) {
      console.log(err)
      alert('Failed to log in.');
    }
  }
};

loginBtn.addEventListener('click', loginFormHandler);
