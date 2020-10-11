import React, { useState } from "react";
import MatchModal from "../modals/MatchModal";

class MatchData {
  constructor(id, stadiumNumber, kickOffTime, homeTeam, awayTeam, refereeTeam) {
    this.id = id;
    this.stadiumNumber = stadiumNumber;
    this.kickOffTime = kickOffTime;
    this.homeTeam = homeTeam;
    this.homeScores = 0;
    this.awayTeam = awayTeam;
    this.awayScores = 0;
    this.refereeTeam = refereeTeam;
  }
}

let matches = [];
for (let i = 1; i <= 36; i++) {
  matches.push(
    new MatchData(
      i,
      Math.floor(Math.random() * 2),
      `${new Date().getHours()}:${new Date().getMinutes()}`,
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9)
    )
  );
}
console.log(matches);

const Match = () => {
  const [id, setId] = useState(-1);

  return (
    <div>
      <MatchModal
        id={id}
        data={matches.filter((x) => x.id === id)[0]}
      ></MatchModal>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-bold ">
                <i className="fas fa-table paddingtext-icon pr-1"></i>Match
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
                      <span className="text-header">Match Management</span>
                    </div>
                    <div className="col-sm-3 padding-top-btn">
                      <button
                        type="button"
                        className="btn btn-block btn-primary float-sm-right"
                        data-toggle="modal"
                        data-target="#matchModal"
                        onClick={() => {
                          setId(-1);
                        }}
                      >
                        <i className="fas fa-plus"></i> Add Match
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  <div className="table-responsive mat-elevation-z2">
                    <table className="table table-hover table-striped text-center table-fixed table-shadow">
                      <thead className="thead-dark">
                        <tr>
                          <th width="10%">KickOff</th>
                          <th width="5%">Stadium</th>
                          <th width="15%">Home</th>
                          <th width="5%"></th>
                          <th width="2%"></th>
                          <th width="5%"></th>
                          <th width="15%">Away</th>
                          <th width="15%">Referee</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {matches.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td>{val.kickOffTime}</td>
                              <td>{val.stadiumNumber}</td>
                              <td>{val.homeTeam}</td>
                              <td>{val.homeScores}</td>
                              <td>-</td>
                              <td>{val.awayScores}</td>
                              <td>{val.awayTeam}</td>
                              <td>{val.refereeTeam}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary "
                                  data-toggle="modal"
                                  data-target="#matchModal"
                                  onClick={() => {
                                    setId(val.id);
                                  }}
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

export default Match;
