import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./context/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";


function App() {
  useEffect(() => {
    const alreadyLoggedIn = localStorage.getItem("isLoggedIn");
    if (alreadyLoggedIn == 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
      onLogout:logoutHandler
  }}>
      <MainHeader   />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    
  );
}

export default App;
