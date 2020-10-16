import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamDropdown from "../dropdown/TeamDropdown";
import MatchEvent from "../event/MatchEvent";
import StadiumDropdown from "../dropdown/StadiumDropdown";
import { event } from "jquery";
import moment from 'moment'
import { trackPromise } from "react-promise-tracker";


const MatchModal = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [kickOffTime, setKickOffTime] = useState(new Date());
  const [stadiumId, setStadiumId] = useState(0);
  const [homeTeam, setHomeTeam] = useState(0);
  const [awayTeam, setAwayTeam] = useState(0);
  const [homeScores, setHomeScores] = useState(0);
  const [awayScores, setAwayScores] = useState(0);
  const [refereeTeam, setRefereeTeam] = useState(0);
  const [events, setEvents] = useState([]);
  const [click, setClick] = useState(0);


  const renderMatchEvent = () => {
    return events.map(matchEvent => {
      return <MatchEvent  id={matchEvent.id} data={matchEvent} filterTeam={[props.data.HomeTeam, props.data.AwayTeam]} remove={removeEvent} />
    })
  }

  const addEvent = () => {
    
    setClick(click + 1);
  };
  const removeEvent = (id) => {
    setEvents(events.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
        setKickOffTime(new Date());
        setHomeScores(0);
        setAwayScores(0);
      } else {
        setTitle("Edit");
        setKickOffTime(props.data.Kickoff);
        setStadiumId(props.data.StadiumId);
        setHomeTeam(props.data.HomeTeamId);
        setAwayTeam(props.data.AwayTeamId);
        setHomeScores(+props.data.HomeScores);
        setAwayScores(+props.data.AwayScores);
        setRefereeTeam(props.data.RefereeTeamId);
        setEvents(props.data.MatchEvents)
      }
      setId(props.id);
    }
    return () => { };
  }, [id, props]);

  const hanDleSubmit = () => {
    if (title === "Add") {
      const match = {
        Kickoff: kickOffTime,
        HomeScores: homeScores,
        AwayScores: awayScores,
        StadiumId: stadiumId,
        HomeTeamId: homeTeam,
        AwayTeamId: awayTeam,
        RefereeTeamId: refereeTeam,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .post("https://itreuionapi.herokuapp.com/match/", match, {
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
    }
  };

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
                          type="time"
                          className="form-control"
                          id="kickOffTime"
                          required
                          value={
                            moment.utc(kickOffTime).format('hh:mm')
                            // new Date(
                            //   Date.parse(kickOffTime)
                            // ).toLocaleTimeString("th-TH", {
                            //   hour12: false,
                            //   hour: "2-digit",
                            //   minute: "2-digit",
                            // }) || "07:00"
                          }
                          onChange={(event) => {
                            console.log(event);
                            console.log(kickOffTime);
                            console.log(
                              new Date(
                                Date.parse(kickOffTime)
                              ).toLocaleTimeString("th-TH", {
                                hour12: false,
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            );
                            // setKickOff(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-3">
                        <StadiumDropdown
                          id="stadiumId"
                          label="Stadium :"
                          value={stadiumId || ""}
                          setValue={setStadiumId}
                        />
                      </div>

                      <div className="col-6">
                        <TeamDropdown
                          id="refTeam"
                          label="Referee Team :"
                          value={refereeTeam || ""}
                          setValue={setRefereeTeam}
                        />
                      </div>

                      <div className="col-4">
                        <TeamDropdown
                          id="homeTeam"
                          label="Home Team :"
                          value={homeTeam || ""}
                          setValue={setHomeTeam}
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
                        <TeamDropdown
                          id="awayTeam"
                          label="Away Team :"
                          value={awayTeam}
                          setValue={setAwayTeam}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="match-event">
                          {renderMatchEvent()}
                </div>
                <div className="plus-match-event">
                  <button
                    className="btn btn-primary float-sm-right"
                    onClick={() => {
                      addEvent();
                    }}
                  >
                    <i className="fas fa-plus-square" />
                  </button>
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

export default MatchModal;
