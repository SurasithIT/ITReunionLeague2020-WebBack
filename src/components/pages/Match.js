import React from "react";
import MatchModal from "../modals/MatchModal";

const Match = () => {
  // let data = []

  return (
    <div>
      <MatchModal></MatchModal>
      <div class="content-header">
        <div class="container">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-bold ">
                <i class="fas fa-table paddingtext-icon pr-1"></i>Match
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="col-sm">Match Content Header</div>
                </div>
                <div className="card-body p-0 ">
                  <div class="table-responsive mat-elevation-z2">
                    <table className="table table-hover table-striped text-center table-fixed table-shadow">
                      <thead className="thead-dark">
                        <tr>
                          <th width="5%">Stadium</th>
                          <th width="25%">Home</th>
                          <th width="10%"></th>
                          <th width="5%"></th>
                          <th width="10%"></th>
                          <th width="25%">Away</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Team 1</td>
                          <td>0</td>
                          <td>-</td>
                          <td>0</td>
                          <td>Team 2</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#staticBackdrop"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Team 1</td>
                          <td>0</td>
                          <td>-</td>
                          <td>0</td>
                          <td>Team 2</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#staticBackdrop"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
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
