import React, { useEffect, useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrademark, faCode } from "@fortawesome/free-solid-svg-icons";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

library.add(faTrademark, faCode);

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log("registered");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    setLoading(true);
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    setLoading(true);
    setUser();
    signOut(auth);
  }

  return (
    <div className="App">
      <nav>
        <div className="logo__container">
          <FontAwesomeIcon icon="fa-trademark" className="faIcon trademark" />
          <FontAwesomeIcon icon="fa-code" className="faIcon logo__icon" />
          <p className="logo__name">
            <b>Frontend</b> Simplified
          </p>
        </div>
        <div className="btns__container">
          {loading ? (
            <>
              <div className="skeleton__state rectangle"></div>
              <div className="skeleton__state circle"></div>
            </>
          ) : user ? (
            <>
              <div className="logout__btn--wrapper">
                <button className="logout__btn" onClick={logout}>
                  {user.email[0].toUpperCase()}
                </button>
              </div>
            </>
          ) : (
            <>
              <button className="btn login__btn" onClick={login}>
                Login
              </button>
              <button className="btn register__btn" onClick={register}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default App;
