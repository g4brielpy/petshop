import React from "react";

export function InputContact({
  type = "",
  name = "",
  id = "",
  placeholder = "",
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="
        outline-none border border-solid 
        border-verde1 focus:border-verde2 
        p-4 rounded-md
      "
    />
  );
}
