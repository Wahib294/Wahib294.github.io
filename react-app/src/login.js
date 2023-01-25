import React from "react";
var name;
var pass;
function check() {
  name = document.getElementById("name").value;
  pass = document.getElementById("pass").value;
  if (name === "admin" && pass === "admin123") {
    window.location.href = "/edit";
  } else {
    alert("Wrong Username or Password");
  }
}

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <label>Name : </label>
      <input type="text" name="name" id="name" />
      <br />
      <label>Password : </label>
      <input type="password" name="pass" id="pass" />
      <br />
      <button onClick={check}>Log In</button>
    </>
  );
};
export { LoginPage, getUser };
