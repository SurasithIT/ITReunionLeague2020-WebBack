import React, { useState, useEffect } from "react";
import axios from "axios";
import MatchModal from "../modals/MatchModal";
import moment from "moment"

const MatchData = () => {
  const [MatchsData, setMatchsData] = useState([]);
  const [id, setId] = useState(-1);
  const [match, setMatch] = useState({});

  const fetchMatch = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/match";
    //const testURL = "http://localhost:3000/match";
    axios({
      method: "get",
      url: PROXY_URL + URL,
      //url: testURL,
      data: {
        KEY: "VALUE",
      },
    })
      .then((res) => {
        setMatchsData(res.data.matchs);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMatch();
    return () => {};
  }, []);

  const handleDelete = (idmatch) => {
    const token = localStorage.getItem("token");
    axios
      .delete("https://itreuionapi.herokuapp.com/match/" + idmatch, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          fetchMatch();
        } else {
          console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
          //Show Dialog box หรือ Modal แจ้ง Error
        }
      })
      .catch((err) => console.log(err));
  };

  const RenderMatch = (props) => {
    const convert_time = moment.utc(props.rendermatch.Kickoff).format('LT');
    return (
      <tr>
        <td>{convert_time}</td>
        <td>{props.rendermatch.StadiumId}</td>
        <td>{props.rendermatch.HomeTeam.name}</td>
        <td>{props.rendermatch.HomeScores}</td>
        <td>-</td>
        <td>{props.rendermatch.AwayScores}</td>
        <td>{props.rendermatch.AwayTeam.name}</td>
        <td>{props.rendermatch.RefereeTeam.name}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary "
            data-toggle="modal"
            data-target="#matchModal"
            onClick={() => {
              setId(props.rendermatch.id);
              setMatch(props.rendermatch);
            }}
          >
            Edit
          </button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleDelete(props.rendermatch.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const matchlist = () => {
    return MatchsData.map((rendermatch) => {
      return <RenderMatch rendermatch={rendermatch} key={rendermatch.id} />;
    });
  };
  return (
    <div>
      <MatchModal id={id} data={match}></MatchModal>
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
                      <tbody>{matchlist()}</tbody>
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

export default MatchData;
