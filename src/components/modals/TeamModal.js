import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-alert";
import { Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

const TeamModal = (props) => {
  const [id, setId] = useState(0);
  const [idteam, setIdteam] = useState(0);
  const [title, setTitle] = useState("");
  const [generation, setGeneration] = useState("");
  const [played, setPlayed] = useState(0);
  const [won, setWon] = useState(0);
  const [drawn, setDrawn] = useState(0);
  const [lost, setLost] = useState(0);
  const [points, setPoints] = useState(0);
  const [goalFor, setGoalFor] = useState(0);
  const [goalAgainst, setGoalAgainst] = useState(0);
  const [goalDiff, setGoalDiff] = useState(0);

  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        console.log("Add");
        setTitle("Add");
        setGeneration("");
        setPlayed(0);
        setWon(0);
        setDrawn(0);
        setLost(0);
        setPoints(0);
        setGoalFor(0);
        setGoalAgainst(0);
        setGoalDiff(0);
      } else {
        // fetch and then
        console.log(props.data.id);
        setTitle("Edit");
        setGeneration(props.data.name);
        setIdteam(props.data.id);
        setPlayed(0);
        setWon(0);
        setDrawn(0);
        setLost(0);
        setPoints(0);
        setGoalFor(0);
        setGoalAgainst(0);
        setGoalDiff(0);
      }
      setId(props.id);
    }
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, [id, props]);

  useEffect(() => {
    setGoalDiff(goalFor - goalAgainst);
    setPoints(+won * 3 + +drawn);
    setPlayed(+won + +drawn + +lost);
  }, [won, drawn, lost, goalFor, goalAgainst]);

  const hanDleSubmit = () => {
    if (title === "Add") {
      const team = {
        name: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .post("https://itreuionapi.herokuapp.com/team", team, {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.status);
            } else {
              console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
              //Show Dialog box หรือ Modal แจ้ง Error
            }
          })
          .catch((err) => console.log(err))
      );
    } else {
      const team = {
        name: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .patch("https://itreuionapi.herokuapp.com/team/" + idteam, team, {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => {
            if (res.status === 200) {
            } else {
              console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
              //Show Dialog box หรือ Modal แจ้ง Error
            }
          })
          .catch((err) => console.log(err))
      );
    }
  };
  return (
    <div>
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="teamModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="teamModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="teamModalLabel">
                  {title} Team
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="generation">Generation :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="generation"
                        required
                        readOnly
                        value={generation}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      ></input>
                    </div>

                    <div className="col-4">
                      <label htmlFor="played">Played :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="played"
                        required
                        readOnly
                        value={played}
                        onChange={(event) => {
                          setPlayed(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="points">Points :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="points"
                        required
                        readOnly
                        value={points}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="won">Won :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="won"
                        required
                        value={won}
                        onChange={(event) => {
                          setWon(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="drawn">Drawn :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="drawn"
                        required
                        value={drawn}
                        onChange={(event) => {
                          setDrawn(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="lost">Lost :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="lost"
                        required
                        value={lost}
                        onChange={(event) => {
                          setLost(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="goalFor">Goal for :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="goalFor"
                        required
                        value={goalFor}
                        onChange={(event) => {
                          setGoalFor(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="goalAgainst">Goal against :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="goalAgainst"
                        required
                        value={goalAgainst}
                        onChange={(event) => {
                          setGoalAgainst(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="goalDifferent">Goal different :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="goalDifferent"
                        required
                        readOnly
                        value={goalDiff}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={hanDleSubmit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
