import React from "react";

function RadioInput({ name, type, rules, register, errors, values }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}:</label>
      {values?.map((value, index) => {
        return (
          <div className="radio-type" key={index}>
            <input
              type={type}
              name={name}
              value={value}
              {...register(name, { ...rules })}
            />
            <label htmlFor={name}>{value}</label>
          </div>
        );
      })}

      {errors[name]?.type === "required" && <span>This Field is required</span>}
      {errors[name]?.type === "minLength" && (
        <span>This Field required minimum {rules?.minLength} characters</span>
      )}
    </div>
  );
}

export default RadioInput;
