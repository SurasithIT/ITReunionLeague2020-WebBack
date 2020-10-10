import React from "react";

const TeamModal = (props) => {
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
                <h5 className="modal-title" id="staticBackdropLabel">
                  {props.id !== -1 ? "Edit" : "Add"} Team
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
                      <label for="sel1">Generation :</label>
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>

                      <div className="col-6">
                        <label for="usr">Played :</label>
                        <input type="number" class="form-control" id="usr" required />
                      </div>

                      <div className="col-4">
                        <label for="usr">Won :</label>
                        <input type="number" class="form-control" id="usr" required/>
                      </div>

                      <div className="col-4">
                        <label for="usr">Drawn :</label>
                        <input type="number" class="form-control" id="usr" required/>
                      </div>

                      <div className="col-4">
                        <label for="usr">Lost :</label>
                        <input type="number" class="form-control" id="usr" required/>
                      </div>

                      <div className="col-4">
                        <label for="usr">Goal for :</label>
                        <input type="number" class="form-control" id="usr" required/>
                      </div>

                      <div className="col-4">
                        <label for="usr">Goal against :</label>
                        <input type="number" class="form-control" id="usr" required/>
                      </div>

                      <div className="col-4">
                        <label for="usr">Goal different :</label>
                        <input type="number" class="form-control" id="usr" required readOnly/>
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
