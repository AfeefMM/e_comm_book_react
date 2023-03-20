import React, { useState, useEffect,useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Topbar from "./navbar";
import IdCards from "./IdCards";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./Login/SignUpForm";
import VerifyEmail from "./Login/VerifyEmail";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "./LandingPage";
import { useAuthValue } from "./AuthContext";
import {CartProvider} from "react-use-cart";
import Profile from "./Login/Profile";
import NotAuthTopbar from "./NotAuthNavBar";
import ProductDescPage from "./ProductDescPage";





function App() {

    

    //authentication
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  const {isAuthenticated} = useAuthValue()

  return (
    <CartProvider>
    <BrowserRouter>
    
      {/* <AuthProvider value={{ currentUser }}>
      

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
        

      </AuthProvider> */}
      {/* <CartState> */}
       <Topbar />
       
        <Routes>
          <Route path="/" exact element={<IdCards />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signup" exact element={<SignUpForm />} />
          <Route path="/list" exact element={<IdCards />} />
          <Route path="/description/:bookId?" exact element={<ProductDescPage/>} />
          <Route path="/verify-email" exact element={<VerifyEmail/>} />

          <Route exact path='/profile' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
        </Routes>
        {/* </CartState> */}
      {/* <IdCards/> */}

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
// 361d9572ed9b5c0aba0e637a22a4478ba85c6544