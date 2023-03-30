import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { openModal } from "../../../layouts/components/modals/ModalPopUp";
// import axios from "axios";

export default function Login() {
  const objLogin = {
    email: "",
    password: "",
  };
  const users = {
    email: "mhmmdilhamriza03@gmail.com",
    password: "12345",
  };
  const [user, setUser] = useState(users);
  const [login, setLogin] = useState(objLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    var formid = e.target.id;
    var target = document.getElementById(formid);
    var myButton = target.getElementsByClassName("btn-submit")[0];
    myButton.textContent = "Processing...";
    myButton.disabled = true;
    if (login.email === user.email && login.password === user.password) {
      openModal({
        header: "Information",
        message: <RenderMessage login={login} />,
      });
      setIsLoggedIn(true);
    } else {
      alert("Email atau password salah!");
    }
    myButton.textContent = "Submit";
    myButton.disabled = false;
  };

  return isLoggedIn ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="container">
      <div className="w-50 m-auto">
        <div className="card m-5">
          <div className="card-header">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder text-dark">Form Login</span>
              <span className="text-gray-400 mt-1 fw-bold fs-6">
                Please fill up the form with correctly
              </span>
            </h3>
          </div>
          <div className="card-body">
            <form
              className="form-login"
              method="post"
              onSubmit={(e) => handlerSubmit(e)}
              id="form-login"
            >
              <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="required form-label fs-6 fw-bolder text-dark">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control form-control-lg form-control-solid"
                  defaultValue={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
              </div>

              <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="required form-label fs-6 fw-bolder text-dark">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control form-control-lg form-control-solid"
                  defaultValue={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-lg btn-light">
                  Clear
                </button>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary mx-2 btn-submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const RenderMessage = ({ login }) => {
  return (
    <div className="login">
      <p className="text-dark">email: {login.email}</p>
      <p className="text-dark">Password: {login.password}</p>
    </div>
  );
};
