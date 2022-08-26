import React from "react";

function FileInput({ name, type, emptytext, rules, register, errors }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}: </label>
      <input
        type={type}
        name={name}
        className="file-type"
        multiple
        {...register(name, { ...rules })}
      />

      {errors[name]?.type === "required" && <span>This Field is required</span>}
      {errors[name]?.type === "minLength" && (
        <span>This Field required minimum {rules?.minLength} characters</span>
      )}
    </div>
  );
}

export default FileInput;
