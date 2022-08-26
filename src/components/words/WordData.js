import React, { useEffect, useState } from "react";
import { REQ_URL } from "../../CONSTANTS";
import axios from "axios";

function WordData({ learnername, getRefresh }) {
  const [wordsData, setWordsData] = useState([]);
  useEffect(() => {
    axios
      .get(`${REQ_URL}/words/getbylearnername`, {
        params: {
          learnername: learnername,
        },
      })
      .then((res) => {
        setWordsData(res.data.result);
      })
      .then((error) => {
        console.log(error);
      });
  }, [learnername, getRefresh]);

  return (
    <div className="word-data-section">
      <div className="learner-name">
        <div>Words Data By </div>
        <div>
          {learnername} ({wordsData.length})
        </div>
      </div>
      {wordsData?.map((item) => {
        return (
          <div className="single-word" key={item._id}>
            <div>{item.word}</div>
            <div>{item.meaning}</div>
          </div>
        );
      })}
      {!wordsData.length > 0 && (
        <div className="text-center text-red-500 text-xs">
          No Words Learned yet
        </div>
      )}
    </div>
  );
}

export default WordData;
