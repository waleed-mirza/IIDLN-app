import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { REQ_URL } from "../../CONSTANTS.js";
import SubmitInput from "../utility/Inputs/SubmitInput";
import TextInput from "../utility/Inputs/TextInput";

const inputs = {
  word: {
    name: "word",
    type: "text",
    emptytext: "Enter a word...",
    completion: "off",
    rules: {
      required: true,
      minLength: 3,
    },
  },
  meaning: {
    name: "meaning",
    type: "text",
    emptytext: "Enter word meaning...",
    completion: "off",
    rules: {
      required: true,
      minLength: 3,
    },
  },
};

function InputForm({ setGetRefresh, getRefresh }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlers = { register: register, errors: errors };
  const onSubmit = (data) => {
    data.learnername = localStorage.getItem("IIDLN");

    data.word = data.word.toLowerCase();
    data.meaning = data.meaning.toLowerCase();
    console.log(data);

    axios.post(`${REQ_URL}/words/add`, data).then((res) => {
      console.log(res.data);
      reset();
      setGetRefresh(!getRefresh);
    });
  };
  return (
    <div className="word-input-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...inputs.word} {...handlers} />
        <TextInput {...inputs.meaning} {...handlers} />
        <SubmitInput name="LEARNED" />
      </form>
    </div>
  );
}

export default InputForm;
