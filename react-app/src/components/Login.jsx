import React, { useContext } from "react";
import { Context } from "../context/contextAPI";
import {userlogin} from "../utils/api"
const Login = () => {

  const { modal, setModal } = useContext(Context);
  const toggleModal = () => {
    setModal(!modal);
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
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            onClick={userlogin}
            className="inline-block mb-4 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
