import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../utility/Inputs/TextInput";
import SubmitInput from "../utility/Inputs/SubmitInput";
import { REQ_URL } from "../../CONSTANTS";
import axios from "axios";

const inputs = {
  name: {
    name: "name",
    type: "text",
    emptytext: "Enter Your Name...",
    completion: "off",
    rules: {
      required: true,
      minLength: 4,
    },
  },
};

function UserInfo({
  setLearnername,
  setGetRefresh,
  getRefresh,
  setLearnerDataName,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let learnername = data.name.toLowerCase();
    setLearnername(learnername);
    localStorage.setItem("IIDLN", learnername);
    axios
      .post(`${REQ_URL}/learner/addlearner`, {
        learnername: learnername,
      })
      .then((res) => {
        console.log(res.data);
        setGetRefresh(!getRefresh);
        setLearnerDataName(learnername);
      });
  };
  return (
    <div className="user-info-section my-2 py-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...inputs.name} register={register} errors={errors} />
        <SubmitInput name="SUBMIT" />
      </form>
    </div>
  );
}

export default UserInfo;
