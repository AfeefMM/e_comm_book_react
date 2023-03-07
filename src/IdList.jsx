//import { Button } from "bootstrap";
import { Component } from "react";

class IdList extends Component {
    state = {
    pageHeading: "Heading of the page",
    count: 0,
    countData: [
      { id: 1, idName: "A" , idImage:"https://picsum.photos/id/13/2500/1667"},
      { id: 2, idName: "B" ,idImage:"https://picsum.photos/id/14/2500/1667"},
      { id: 3, idName: null ,idImage:"https://picsum.photos/id/15/2500/1667"},
    ],
  };
  
  render() {
    return (
      <div>
        <h3 className="display-6 p-2">{this.state.pageHeading}</h3>
        <span className="display-6 p-2">{this.state.count}</span>
        <button className="btn btn-secondary p-3" onClick={this.onBtnClick}>
          Count up
        </button>
        {this.getIDList()} 
      </div>
    );
  }

  //onClick for btn for counter
  onBtnClick = () => {
    this.setState((prevState,{count})=>({
        count:prevState.count+1
    }));

    console.log("clicked");
  };
//conditional rendering to check if the particular variable is null
  getNameRender = (name) => {
    return name ?(name):(<div className="bg-warning"> No Name</div>);
  }

  //returns the list 
  getIDList = () =>{
    return(
        <ul className="list-group p-2">
          {this.state.countData.map((countD,index) => {
            return (
            //   <li key={countD.id} className="list-group-item">
            //     {countD.id} {this.getNameRender(countD.idName)}
            //   </li>
            <div className="card m-4" style={{width : '50%'}} key={countD.id}>
            <img src= {countD.idImage} className="card-img-top" alt="..."/>
            <button className="btn btn-secondary m-2" onClick={()=>{this.onChangedPhoto(countD,index)}}>Change photo</button>
            <div className="card-body">
              <h5 className="card-title">{countD.id}</h5>
              <span className="card-text">{this.getNameRender(countD.idName)}</span>
            </div>
          </div>
            );
          })}
        </ul>
    );
  }
  onChangedPhoto = (countD,index) =>{
    // console.log(countD);
    var idArr = this.state.countData;
    idArr[index].idImage = "https://picsum.photos/id/16/2500/1667";

    this.setState({countData:idArr });
  }

}

export default MainContent;

