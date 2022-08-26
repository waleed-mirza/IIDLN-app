import logo from './logo.svg';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import UserInfo from "./components/UserInfo/UserInfo";
import WordInputForm from "./components/WordInput/InputForm";
import { useEffect, useState } from "react";
import WordData from "./components/words/WordData";
import LearnerData from "./components/learnersdata/LearnerData";
import Footer from "./Footer/Footer";

function App() {
  const [learnername, setLearnername] = useState(localStorage.getItem("IIDLN"));
  const [learnersDataName, setLearnerDataName] = useState(
    localStorage.getItem("IIDLN")
  );
  const [getRefresh, setGetRefresh] = useState(false);
  useEffect(() => {}, [learnername, learnersDataName]);
  return (
    <>
      <Navbar />
      {learnername ? (
        <WordInputForm setGetRefresh={setGetRefresh} getRefresh={getRefresh} />
      ) : (
        <UserInfo
          setLearnername={setLearnername}
          setLearnerDataName={setLearnerDataName}
          setGetRefresh={setGetRefresh}
          getRefresh={getRefresh}
        />
      )}
      <LearnerData
        setLearnerDataName={setLearnerDataName}
        getRefresh={getRefresh}
      />
      <WordData learnername={learnersDataName} getRefresh={getRefresh} />
      <Footer />
    </>
  );
}

export default App;
