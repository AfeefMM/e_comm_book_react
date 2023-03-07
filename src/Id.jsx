import React,{ Component } from "react";


class ID extends Component{

    render(){
        return(
            <div className="card m-2" >
            <img src= {this.props.photo} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.first_name} {this.props.last_name}</h5>
              <span className="card-text">ID: {this.props.id} </span> <br/>
              <span className="card-text">{this.props.email}</span>
            </div>
          </div> 
        );
    }
}

export default ID;

