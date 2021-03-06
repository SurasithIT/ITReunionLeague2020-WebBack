import React, { useState, useEffect } from "react";
import TeamModal from "../modals/TeamModal";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const TeamData = () => {
  const [DataTeam, setDataTeam] = useState([]);
  const [id, setId] = useState(-1);
  const [team, setTeam] = useState({});

  const fetchTeam = () => {
    const URL = "https://itreuionapi.herokuapp.com/team/all";
    trackPromise(
      axios({
        method: "get",
        url: URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          console.log(res.data.teams);
          setDataTeam(res.data.teams);
        })
        .catch((err) => console.log(err))
    );
  };

  useEffect(() => {
    fetchTeam();
    return () => {};
  }, []);

  const handleDelete = (idteam) => {
    const token = localStorage.getItem("token");
    trackPromise(
      axios
        .delete("https://itreuionapi.herokuapp.com/team/" + idteam, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            fetchTeam();
          } else {
            console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
            //Show Dialog box หรือ Modal แจ้ง Error
          }
        })
        .catch((err) => console.log(err))
    );
  };

  const RenderTeam = (props) => {
    return (
      <tr>
        <td>{props.renderteam.name}</td>
        <td>{props.renderteam.Played}</td>
        <td>{props.renderteam.Won}</td>
        <td>{props.renderteam.Drawn}</td>
        <td>{props.renderteam.Lost}</td>
        <td>{props.renderteam.GoalAgainst}</td>
        <td>{props.renderteam.GoalDifference}</td>
        <td>{props.renderteam.GoalFor}</td>
        <td>{props.renderteam.Points}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#teamModal"
            onClick={() => {
              setId(1);
              setTeam(props.renderteam);
            }}
          >
            Edit
          </button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleDelete(props.renderteam.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  const Teamlist = () => {
    return DataTeam.map((renderteam) => {
      return <RenderTeam renderteam={renderteam} key={renderteam.id} />;
    });
  };

  return (
    <div>
      <TeamModal id={id} data={team}></TeamModal>
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
                          <th width="30%">Team</th>
                          <th width="5%">Played</th>
                          <th width="5%">Won</th>
                          <th width="5%">Drawn</th>
                          <th width="5%">Lost</th>
                          <th width="5%">GF</th>
                          <th width="5%">GA</th>
                          <th width="5%">GD</th>
                          <th width="5%">Points</th>
                          <th width="30%"></th>
                        </tr>
                      </thead>
                      <tbody>{Teamlist()}</tbody>
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

export default TeamData;
