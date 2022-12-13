const logoutBtn = document.querySelector('#logoutBtn');
const errorEl = document.querySelector("#errorText");
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    errorEl.innerHTML = `Failed to logout.`;
  }
};

logoutBtn.addEventListener('click', logout);