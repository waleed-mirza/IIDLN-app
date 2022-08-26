import React from "react";

function TextInput({
  name,
  type,
  emptytext,
  rules,
  register,
  errors,
  completion,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}: </label>
      <input
        autoComplete={completion}
        type={type}
        name={name}
        className="text-type"
        placeholder={emptytext}
        {...register(name, { ...rules })}
      />
      {errors[name]?.type === "required" && <span>This Field is required</span>}
      {errors[name]?.type === "minLength" && (
        <span>This Field required minimum {rules?.minLength} characters</span>
      )}
      {errors[name]?.type === "min" && (
        <span>This Field required minimum {rules?.min} quantity</span>
      )}
    </div>
  );
}

export default TextInput;
