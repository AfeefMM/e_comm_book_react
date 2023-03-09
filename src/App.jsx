import React, { useState, useEffect,useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Topbar from "./navbar";
import IdCards from "./IdCards";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./Login/SignUpForm";
import VerifyEmail from "./Login/VerifyEmail";
import PrivateRoute from "./PrivateRoute";
import { useAuthValue } from "./AuthContext";

import Profile from "./Login/Profile";
import NotAuthTopbar from "./NotAuthNavBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  const {isAuthenticated} = useAuthValue()
  return (
    <BrowserRouter>
    
      <AuthProvider value={{ currentUser }}>
      
      {/* {isAuthenticated?<Topbar />:<NotAuthTopbar/>} */}
      <Topbar />
        <Routes>
          <Route path="/" exact element={<LoginForm />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signup" exact element={<SignUpForm />} />
          <Route path="/list" exact element={<IdCards />} />
          <Route path="/verify-email" exact element={<VerifyEmail/>} />
          <Route exact path='/profile' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
        </Routes>
        
        {/* <IdCards /> */}
        {/* <SignUpForm /> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
