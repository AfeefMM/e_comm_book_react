import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Topbar from "./navbar";
import IdCards from "./IdCards";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./Login/SignUpForm";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/" exact component={<LoginForm />} />
          <Route path="/login" exact component={<LoginForm />} />
          <Route path="/signup" exact component={<SignUpForm />} />
          <Route path="/list" exact component={<IdCards />} />
        </Routes>
        <Topbar />
        {/* <IdCards /> */}
        <SignUpForm />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
