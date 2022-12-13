
const loginBtn = document.querySelector('#loginBtn');

const login = () => {
  document.location.replace('/login');
};

loginBtn.addEventListener('click', login);