import React, { useState } from "react";
import TeamModal from "../modals/TeamModal";

class TeamData {
  constructor(id, generation) {
    this.id = id;
    this.generation = generation;
    this.played = 0;
    this.won = 0;
    this.drawn = 0;
    this.lost = 0;
    this.goalFor = 0;
    this.goalAgainst = 0;
    this.goalDifferent = 0;
    this.points = 0;
  }
}

let teams = [];
for (let i = 1; i <= 9; i++) {
  teams.push(
    new TeamData(
      i,
      `${Math.floor(Math.random() * 18)} , ${Math.floor(Math.random() * 18)}`
    )
  );
}

const Team = () => {
  const [id, setId] = useState(-1);

  return (
    <div>
      <TeamModal id={id}></TeamModal>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-bold ">
                <i className="fas fa-users paddingtext-icon pr-1"></i>Team
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
                      <span className="text-header">Team Management</span>
                    </div>
                    <div className="col-sm-3 padding-top-btn">
                      <button
                        type="button"
                        className="btn btn-block btn-primary float-sm-right"
                        data-toggle="modal"
                        data-target="#teamModal"
                        onClick={() => {
                          setId(-1);
                        }}
                      >
                        <i className="fas fa-plus"></i> Add Team
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  <div className="table-responsive mat-elevation-z2">
                    <table className="table table-hover table-striped text-center table-fixed table-shadow">
                      <thead className="thead-dark">
                        <tr>
                          <th width="5%">Team</th>
                          <th width="20%">Generation</th>
                          <th width="5%">Played</th>
                          <th width="5%">Won</th>
                          <th width="5%">Drawn</th>
                          <th width="5%">Lost</th>
                          <th width="5%">GF</th>
                          <th width="5%">GA</th>
                          <th width="5%">GD</th>
                          <th width="10%">Points</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {teams.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td>{val.id}</td>
                              <td>{val.generation}</td>
                              <td>{val.played}</td>
                              <td>{val.won}</td>
                              <td>{val.drawn}</td>
                              <td>{val.lost}</td>
                              <td>{val.goalFor}</td>
                              <td>{val.goalAgainst}</td>
                              <td>{val.goalDifferent}</td>
                              <td>{val.points}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#teamModal"
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

export default Team;
