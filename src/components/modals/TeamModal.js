import React, { useState, useEffect } from "react";

const TeamModal = (props) => {
  const [id, setId] = useState(0);
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
    console.log(props);
    if (id !== props.id) {
      if (props.id === -1) {
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
        setTitle("Edit");
        setGeneration(props.data.generation);
        setPlayed(props.data.played);
        setWon(props.data.won);
        setDrawn(props.data.drawn);
        setLost(props.data.lost);
        setPoints(props.data.points);
        setGoalFor(props.data.goalFor);
        setGoalAgainst(props.data.goalAgainst);
        setGoalDiff(props.data.goalDifferent);
      }
      setId(props.id);
    }
  }, [id, props]);

  useEffect(() => {
    setGoalDiff(goalFor - goalAgainst);
    setPoints(+won * 3 + +drawn);
    setPlayed(+won + +drawn + +lost);
  }, [won, drawn, lost, goalFor, goalAgainst]);

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
                        value={generation}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      ></input>
                      {/* <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select> */}
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

export default TeamModal;
