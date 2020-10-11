import React, { useState, useEffect } from "react";

const PlayerModal = (props) => {
  const [id, setId] = useState(0);
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
        setGeneration(0);
        setNumber("");
        setScores(0);
      } else {
        setTitle("Edit");
        setFirstNameTh(props.data.FirstNameTh);
        setLastNameTh(props.data.LastNameTh);
        setFirstNameEn(props.data.FirstNameEn);
        setLastNameEn(props.data.LastNameEn);
        setGeneration(props.data.Generation);
        setNumber(props.data.Number);
        setScores(0);
      }
      setId(props.id);
    }
  }, [id, props.id, props.data]);

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
                      <label htmlFor="generation">Generation :</label>
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
                      </select>
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
                <button type="button" className="btn btn-primary">
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
