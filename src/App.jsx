import React,{ Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./navbar";
import LoginScreen from "./Login/LoginScreen";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./Login/SignUpForm";

class App extends Component{
    render(){
        return <BrowserRouter>
        
        <Routes>
            <Route path="/" exact component={<LoginScreen/>}/>
            <Route path="/login" exact component={<LoginForm/>}/>
            <Route path="/signup" exact component={<SignUpForm/>}/>
            </Routes>
            <Topbar/>
            {/* <IdCards /> */}
            <LoginScreen/>
        </BrowserRouter>;
    }
}

export default App;