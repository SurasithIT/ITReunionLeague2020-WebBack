import React from "react";
import PlayerModal from "../modals/PlayerModal";

class PlayerData {
  constructor(
    id,
    firstNameTh,
    lastNameTh,
    firstNameEn,
    lastNameEn,
    generation,
    number
  ) {
    this.id = id;
    this.firstNameTh = firstNameTh;
    this.lastNameTh = lastNameTh;
    this.firstNameEn = firstNameEn;
    this.lastNameEn = lastNameEn;
    this.generation = generation;
    this.number = number;
    this.scores = 0;
  }
}

let players = [];
for (let i = 1; i <= 100; i++) {
  players.push(
    new PlayerData(
      i,
      "ทดสอบ",
      "ทดสอบ",
      "test",
      "test",
      Math.floor(Math.random() * 18),
      Math.floor(Math.random() * 22)
    )
  );
}

let addPlayer = () => {
  console.log("addPlayer");
  players.push(
    new PlayerData(
      Math.floor(Math.random() * 100),
      "ทดสอบ",
      "ทดสอบ",
      "test",
      "test",
      Math.floor(Math.random() * 18),
      Math.floor(Math.random() * 22)
    )
  );
  console.log(players);
};

const Player = () => {
  return (
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
                        onClick={addPlayer}
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
                        {players.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td>{val.firstNameTh}</td>
                              <td>{val.lastNameTh}</td>
                              <td>{val.firstNameEn}</td>
                              <td>{val.lastNameEn}</td>
                              <td>{val.generation}</td>
                              <td>{val.number}</td>
                              <td>{val.scores}</td>
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
                          );
                        })}
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
  );
};

export default Player;
