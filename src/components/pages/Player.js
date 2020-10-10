import React, {Component} from "react";
import PlayerModal from "../modals/PlayerModal";
import axios from 'axios'



const RenderPlayer = props =>{
  console.log(props)
  return (
      <tr>
    <td>{props.renderplayer.FirstNameTh}</td>
    <td>{props.renderplayer.LastNameTh}</td>
    <td>{props.renderplayer.FirstNameEn}</td>
    <td>{props.renderplayer.LastNameEn}</td>
    <td>{props.renderplayer.Generation}</td>
    <td>{props.renderplayer.Number}</td>
    <td>0</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Edit
      </button>{" "}
      <button
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
  )
}




class PlayerData extends Component{
  constructor(props){
    super(props);
    this.state = {
      playersData : []
    }

  }

  componentDidMount() {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const URL = 'https://itreuionapi.herokuapp.com/player/team/16';
    axios({
      method: 'get',
      url: PROXY_URL+URL,
      data:{
        "KEY":"VALUE"
      }
    })
    .then(res => {
      this.setState({
        playersData: res.data.teams
      })
    })
    .catch(err => console.log(err))
  }

  playerlist(){
    console.log(this.state.playersData)
    return this.state.playersData.map( renderplayer => {
      return <RenderPlayer  renderplayer={renderplayer} key={renderplayer.id}/>
    })
  }


  render(){
    return(
         <div>
      <PlayerModal></PlayerModal>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-bold ">
                <i className="fas fa-user paddingtext-icon pr-1"></i>Player
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="row">
                    <div className="col-sm-9">
                      <span className="text-header">Player Management</span>
                    </div>
                    <div className="col-sm-3 padding-top-btn">
                      <button
                        className="btn btn-block btn-primary float-sm-right"
                        // onClick={}
                      >
                        <i className="fas fa-plus"></i> Add Player
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  <div className="table-responsive mat-elevation-z2">
                    <table className="table table-hover table-striped text-center table-fixed table-shadow">
                      <thead className="thead-dark">
                        <tr>
                          <th width="15%">ชื่อ</th>
                          <th width="15%">นามสกุล</th>
                          <th width="15%">First Name</th>
                          <th width="15%">Last Name</th>
                          <th width="5%">Generation</th>
                          <th width="5%">Number</th>
                          <th width="5%">Scores</th>
                          <th width="25%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.playerlist()}
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
};
export default PlayerData;

