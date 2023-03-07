import React,{ Component } from "react";

import Topbar from "./navbar";
import LoginScreen from "./LoginScreen";

class App extends Component{
    render(){
        return <React.Fragment>
            <Topbar/>
            {/* <IdCards /> */}
            <LoginScreen/>
        </React.Fragment>;
    }
}

export default App;