import React from "react";

export function InputContact({
  type = "",
  name = "",
  id = "",
  placeholder = "",
  required = false,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      className="
        outline-none border border-solid 
        border-verde1 focus:border-verde2 
        p-4 rounded-md
      "
    />
  );
}

export function TextareaContact({
  name = "",
  id = "",
  required = false,
  children,
}) {
  return (
    <textarea
      name={name}
      id={id}
      required={required}
      className="
        outline-none border border-solid 
        border-verde1 focus:border-verde2 
        p-4 rounded-md
      "
    >
      {children}
    </textarea>
  );
}
