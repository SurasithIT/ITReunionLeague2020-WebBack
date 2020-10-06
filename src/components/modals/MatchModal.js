import React from "react";

const MatchModal = () => {
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Modal title
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
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="modal-backdrop" style={{ opacity: "30%" }}></div> */}
    </div>
  );
};

export default MatchModal;
