import React, { useContext } from "react";
import { Context } from "../context/contextAPI";
import { fetchUsers } from "../utils/api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser, modal, setModal } = useContext(Context);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { setUserLogin } = useContext(Context);
  const navigate = useNavigate();
  const Userlogin = (email, password) => {
    fetchUsers().then((data) => {
      const user = data.find((user) => user.email === email);
      if (user && user.password === password) {
        setUser(user);
        setModal(false);
        setUserLogin(true);
        navigate("/");
      } else {
        console.log("Failed");
        alert("Invlid Credentials");
      }
    });
  };
  return (
    <div className="modal ">
      <div className="overlay">
        <div className="modal-content">
          <button className="close-modal my-1 ml-[310px]" onClick={toggleModal}>
            X
          </button>
          <h1 className="text-[25px] font-bold mx-[120px] my-3">Sign In</h1>
          <div className="mb-6">
            <input
              id="email"
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <input
              id="password"
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              Userlogin(email, password);
            }}
            className="inline-block mb-4 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
          <div className="flex font-thin justify-center mt-2">OR</div>
          <div className="mt-5">
            <button
              onClick={() => {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                Userlogin(email, password);
              }}
              className="inline-block mb-4 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
