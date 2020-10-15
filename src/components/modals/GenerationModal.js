import React, { useState, useEffect } from "react";
import axios from "axios";


const PlayerModal = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [generation, setGeneration] = useState("");
  const [idgeneration, setIdgeneration] = useState("");



  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
        setGeneration("");
      } else {
        setTitle("Edit");
        console.log(props.data.id)
        setGeneration(props.data.FirstNameTh);
        setIdgeneration(props.data.id)

      }
      setId(props.id);
    }
  }, [id, props.id, props.data]);

  const hanDleSubmit = () => {
    if(title === 'Add'){
      const newgeneration = {
        'number': generation
      }
      const token = localStorage.getItem('token')
      axios.post('https://itreuionapi.herokuapp.com/team/generation', newgeneration, {
        headers: {
          Authorization: token}
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.status)
        } else {
          console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
          //Show Dialog box หรือ Modal แจ้ง Error
        }
      })
      .catch((err) => console.log(err))
    }else{
      const editgeneration = {
        'number': generation
      }
      const token = localStorage.getItem('token')
      axios.patch('https://itreuionapi.herokuapp.com/team/generation' + idgeneration , editgeneration, {
        headers: {
          Authorization: token}
      })
      .then(res => {
        if (res.status === 200) {
          
        } else {
          console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
          //Show Dialog box หรือ Modal แจ้ง Error
        }
      })
      .catch((err) => console.log(err))
    }
  }
    
  return (
    <div>
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="generationModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="playerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="playerModalLabel">
                  {title} Generation
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
                      <label htmlFor="firstNameTh">รุ่น :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameTh"
                        required
                        value={generation}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={hanDleSubmit}>
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
