const formLog = document.querySelector(".login-form");
// const email = document.querySelector('[name="email"]');
// const password = document.querySelector('[name="password"');
// const btn = document.querySelector("button");
formLog.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("fill in all fields");
  } else {
    formLog.reset();
  }
});
