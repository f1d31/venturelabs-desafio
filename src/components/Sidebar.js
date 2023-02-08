import React from "react";

export const Sidebar = ({ activeNew, setActiveNew }) => {
  return (
    <div
      className="d-none d-md-flex  d-lg-flex col-lg-3 col-md-3 flex-column text-white p-3"
      style={{ minHeight: "100vh", backgroundColor: "gray" }}
    >
      <br />
      <br />
      <div
        className={`${
          activeNew ? "fw-bold " : " "
        }fs-5 border-bottom m-3 mb-0 `}
        style={{ cursor: "pointer" }}
        onClick={() => setActiveNew(true)}
      >
        Novo cliente
      </div>
      <div
        className={`${activeNew ? " " : "fw-bold "}fs-5 border-bottom m-3 mt-2`}
        style={{ cursor: "pointer" }}
        onClick={() => setActiveNew(false)}
      >
        Lista de clientes
      </div>
    </div>
  );
};
