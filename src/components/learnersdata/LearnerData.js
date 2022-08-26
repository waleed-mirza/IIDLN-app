import React, { useEffect, useState } from "react";
import { REQ_URL } from "../../CONSTANTS";
import axios from "axios";

function LearnerData({ setLearnerDataName, getRefresh }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${REQ_URL}/learner/getlearners`).then((res) => {
      setData(res.data.result);
    });
  }, [getRefresh]);
  return (
    <>
      <div className="learner-data-name-section">
        {data.map((item) => {
          return (
            <div
              className="single-learnername"
              key={item._id}
              onClick={() => {
                setLearnerDataName(item.learnername);
              }}
            >
              {item.learnername}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LearnerData;
