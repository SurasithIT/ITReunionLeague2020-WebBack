import React, { useState, useEffect } from "react";

const MatchModal = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [kickOffTime, setKickOffTime] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );
  const [stadiumNumber, setStadiumNumber] = useState(0);
  const [homeTeam, setHomeTeam] = useState(0);
  const [awayTeam, setAwayTeam] = useState(0);
  const [homeScores, setHomeScores] = useState(0);
  const [awayScores, setAwayScores] = useState(0);
  const [refereeTeam, setRefereeTeam] = useState(0);

  useEffect(() => {
    console.log(props);
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
        setKickOffTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
        setStadiumNumber(1);
        setHomeTeam(0);
        setAwayTeam(0);
        setHomeScores(0);
        setAwayScores(0);
        setRefereeTeam(0);
      } else {
        setTitle("Edit");
        setKickOffTime(props.data.kickOffTime);
        setStadiumNumber(props.data.stadiumNumber);
        setHomeTeam(props.data.homeTeam);
        setAwayTeam(props.data.awayTeam);
        setHomeScores(props.data.homeScores);
        setAwayScores(props.data.awayScores);
        setRefereeTeam(props.data.refereeTeam);
      }
      setId(props.id);
    }
  }, [id, props]);

  return (
    <div>
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="matchModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="matchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="matchModalLabel">
                  {title} Match
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
                <div className="match-detail">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-3">
                        <label htmlFor="kickOffTime">Kick off :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="kickOffTime"
                          required
                          value={kickOffTime}
                          onChange={(event) => {
                            console.log(event);
                            // setKickOff(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-3">
                        <label htmlFor="stadiumNumber">Stadium :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="stadiumNumber"
                          required
                          value={stadiumNumber}
                          onChange={(event) => {
                            setStadiumNumber(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-6">
                        <label htmlFor="refereeTeam">Referee Team :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="refereeTeam"
                          required
                          value={refereeTeam}
                          onChange={(event) => {
                            setRefereeTeam(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-4">
                        <label htmlFor="homeTeam">Home Team :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="homeTeam"
                          required
                          value={homeTeam}
                          onChange={(event) => {
                            setHomeTeam(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-2">
                        <label htmlFor="homeScores">scores :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="homeScores"
                          required
                          value={homeScores}
                          onChange={(event) => {
                            setHomeScores(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-2">
                        <label htmlFor="awayScores">scores :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="awayScores"
                          required
                          value={awayScores}
                          onChange={(event) => {
                            setAwayScores(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-4">
                        <label htmlFor="awayTeam">Away Team :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="awayTeam"
                          required
                          value={awayTeam}
                          onChange={(event) => {
                            setAwayTeam(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="match-event">Match event</div>
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

export default MatchModal;
