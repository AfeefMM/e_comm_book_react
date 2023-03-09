import React, { Component } from "react";

class ProfileCard extends Component{

    render(){
  return (

      <div class="col-sm-6 mb-3 ">
        <div class="card profileCard">
          <div class="card-body ">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.value}</p>
          </div>
        </div>
      </div>

  );}
}

export default ProfileCard;
