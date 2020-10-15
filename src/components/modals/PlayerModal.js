import React, { useState, useEffect } from "react";
import axios from "axios";
import GenerationDropdown from "../dropdown/GenerationDropdown";
import { trackPromise } from "react-promise-tracker";

const PlayerModal = (props) => {
  const [id, setId] = useState(0);
  const [idplayer, setIdplayer] = useState(0);
  const [title, setTitle] = useState("");
  const [firstNameTh, setFirstNameTh] = useState("");
  const [lastNameTh, setLastNameTh] = useState("");
  const [firstNameEn, setFirstNameEn] = useState("");
  const [lastNameEn, setLastNameEn] = useState("");
  const [generation, setGeneration] = useState(0);
  const [number, setNumber] = useState("");
  const [scores, setScores] = useState(0);

  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
        setFirstNameTh("");
        setLastNameTh("");
        setFirstNameEn("");
        setLastNameEn("");
        setGeneration("");
        setNumber("");
        setScores(0);
      } else {
        setTitle("Edit");
        console.log(props.data.id);
        setFirstNameTh(props.data.FirstNameTh);
        setLastNameTh(props.data.LastNameTh);
        setFirstNameEn(props.data.FirstNameEn);
        setLastNameEn(props.data.LastNameEn);
        setGeneration(props.data.Generation);
        setNumber(props.data.Number);
        setScores(0);
        setIdplayer(props.data.id);
      }
      setId(props.id);
    }
    return () => {};
  }, [id, props.id, props.data]);

  const hanDleSubmit = () => {
    if (title === "Add") {
      const player = {
        FirstNameTh: firstNameTh,
        LastNameTh: lastNameTh,
        FirstNameEn: firstNameEn,
        LastNameEn: lastNameEn,
        Number: number,
        Scores: scores,
        Generation: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .post("https://itreuionapi.herokuapp.com/player", player, {
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
      const player = {
        FirstNameTh: firstNameTh,
        LastNameTh: lastNameTh,
        FirstNameEn: firstNameEn,
        LastNameEn: lastNameEn,
        Number: number,
        Scores: scores,
        Generation: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .patch(
            "https://itreuionapi.herokuapp.com/player/" + idplayer,
            player,
            {
              headers: {
                Authorization: token,
              },
            }
          )
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
          id="playerModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="playerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="playerModalLabel">
                  {title} Player
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
                    <div className="col-6">
                      <label htmlFor="firstNameTh">ชื่อ :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameTh"
                        required
                        value={firstNameTh}
                        onChange={(event) => {
                          setFirstNameTh(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="lastNameTh">นามสกุล :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameTh"
                        required
                        value={lastNameTh}
                        onChange={(event) => {
                          setLastNameTh(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="firstNameEn">Firstname :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameEn"
                        required
                        value={firstNameEn}
                        onChange={(event) => {
                          setFirstNameEn(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="lastNameEn">Lastname :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameEn"
                        required
                        value={lastNameEn}
                        onChange={(event) => {
                          setLastNameEn(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <GenerationDropdown
                        id="generation"
                        label="Generation :"
                        value={generation || ""}
                        setValue={setGeneration}
                      />
                      {/* <label htmlFor="generation">Generation :</label>
                      <select
                        className="form-control"
                        id="generation"
                        value={generation}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select> */}
                    </div>

                    <div className="col-4">
                      <label htmlFor="number">Number :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="number"
                        value={number}
                        onChange={(event) => {
                          setNumber(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-4">
                      <label htmlFor="scores">Scores :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="scores"
                        value={scores}
                        required
                        onChange={(event) => {
                          setScores(event.target.value);
                        }}
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

export default PlayerModal;
