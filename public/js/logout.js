const logoutBtn = document.querySelector('#logoutBtn');
const error = document.querySelector("#errorText");
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    error.innerHTML = `Failed to logout.`;
  }
};

logoutBtn.addEventListener('click', logout);