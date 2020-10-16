import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import FadeLoader from "react-spinners/FadeLoader";
const LoadingSpinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {promiseInProgress === true && (
        <div className="spinner-loader">
          <div className="spinner-item">
            <FadeLoader size={500} color={"#007bff"} loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
