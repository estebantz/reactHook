import React from "react";

export const ItemTarea = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {props.nombreTarea}
      <button
        className="btn btn-danger"
        onClick={() => props.borrarTarea(props.nombreTarea)}
      >
        X
      </button>
    </li>
  );
};
