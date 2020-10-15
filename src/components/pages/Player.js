import React, { useState, useEffect } from "react";
import PlayerModal from "../modals/PlayerModal";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const Player = () => {
  const [playersData, setPlayersData] = useState([]);
  const [id, setId] = useState(-1);
  const [player, setPlayer] = useState({});

  const fetchPlayer = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/player";
    trackPromise(
      axios({
        method: "get",
        url: PROXY_URL + URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          console.log(res.data.player);
          setPlayersData(res.data.player);
        })
        .catch((err) => console.log(err))
    );
  };

  useEffect(() => {
    fetchPlayer();
    return () => {};
  }, []);

  const handleDelete = (idplayer) => {
    const token = localStorage.getItem("token");
    trackPromise(
      axios
        .delete("https://itreuionapi.herokuapp.com/player/" + idplayer, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            fetchPlayer();
          } else {
            console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
            //Show Dialog box หรือ Modal แจ้ง Error
          }
        })
        .catch((err) => console.log(err))
    );
  };

  const RenderPlayer = (props) => {
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
            data-target="#playerModal"
            onClick={() => {
              setId(props.renderplayer.id);
              setPlayer(props.renderplayer);
            }}
          >
            Edit
          </button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleDelete(props.renderplayer.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const playerlist = () => {
    return playersData.map((renderplayer) => {
      return <RenderPlayer renderplayer={renderplayer} key={renderplayer.id} />;
    });
  };

  return (
    <div>
      <PlayerModal id={id} data={player}></PlayerModal>
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
                        type="button"
                        className="btn btn-block btn-primary float-sm-right"
                        data-toggle="modal"
                        data-target="#playerModal"
                        onClick={() => {
                          setId(-1);
                        }}
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
                      <tbody>{playerlist()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
