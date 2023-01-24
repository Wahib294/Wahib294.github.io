import React from "react";
import { getUser } from "./login";
var check = () => {
  if (getUser() === "admin") {
    console.log("Hello Admin");
  } else {
    console.log(getUser());
    console.log("asd");
  }
};

const Edit = () => {
  check();
  return <h1>Edit</h1>;
};

export default Edit;
