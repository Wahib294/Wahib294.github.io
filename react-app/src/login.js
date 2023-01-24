import React from "react";
const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <form action="/index">
        <label>Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label>Password</label>
        <input type="text" name="pass" id="pass" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
export default LoginPage;
