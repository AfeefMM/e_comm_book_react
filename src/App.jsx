import React,{ Component } from "react";
import IdCards from "./IdCards";
import Topbar from "./navbar";

class App extends Component{
    render(){
        return <React.Fragment>
            <Topbar/>
            <IdCards />
        </React.Fragment>;
    }
}

export default App;