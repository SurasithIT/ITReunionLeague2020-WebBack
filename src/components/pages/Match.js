import React from "react";
import MatchModal from "../modals/MatchModal";

const Match = () => {
  return (
    <div>
      <MatchModal></MatchModal>
      <div className="content">
        <div className="card content-inside">
          <div className="row">
            <div className="col-sm">Match Content</div>
          </div>
          <div className="row">
            <div className="col-sm">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col-2">Stadium</th>
                    <th scope="col-3">Home</th>
                    <th scope="col-1"></th>
                    <th scope="col-1"></th>
                    <th scope="col-1"></th>
                    <th scope="col-3">Away</th>
                    <th scope="col-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Team 1</td>
                    <td>0</td>
                    <td>-</td>
                    <td>0</td>
                    <td>Team 2</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Team 1</td>
                    <td>0</td>
                    <td>-</td>
                    <td>0</td>
                    <td>Team 2</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
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
                        {/* <button className="btn btn-primary" onClick={toggle}> */}
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
  );
};

export default Match;
