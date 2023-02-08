const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value;

  if (!email || !password) {
    alert("All fields are required.");
    return;
  }

  const data = { email, password };
  console.log(data);
  event.target.reset();
});
