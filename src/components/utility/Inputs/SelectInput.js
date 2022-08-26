import React from "react";

function SelectInput({ name, rules, register, errors, values }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}: </label>

      <select
        {...register(name, { ...rules })}
        id={name}
        className="select-type"
      >
        <option value="">Select {name}</option>
        {values?.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </select>

      {errors[name]?.type === "required" && <span>This Field is required</span>}
      {errors[name]?.type === "minLength" && (
        <span>This Field required minimum {rules?.minLength} characters</span>
      )}
    </div>
  );
}

export default SelectInput;
