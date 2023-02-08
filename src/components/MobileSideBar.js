import React from "react";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const MobileSideBar = ({
  sidebar,
  setSidebar,
  showSidebar,
  activeNew,
  setActiveNew,
}) => {
  return (
    <>
      <div
        className=" d-flex align-self-start d-lg-none d-md-none p-1 align-items-center mb-2"
        style={{ background: "gray", width: "100%" }}
      >
        <FaBars onClick={showSidebar} color="#fff" size={30} />
      </div>
      <>
        <nav
          className={
            sidebar
              ? "nav-menu active" + " d-lg-none d-md-none "
              : "nav-menu" + " d-lg-none d-md-none "
          }
        >
          <br />
          <br />
          <div className="d-flex flex-column justify-content-start text-white w-100 p-2 pt-4">
            <AiFillCloseCircle
              className="align-self-end"
              onClick={showSidebar}
              color="#fff"
              size={30}
            />
            <div
              className={`${
                activeNew ? "fw-bold " : " "
              }fs-5 border-bottom m-3 mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setActiveNew(true);
                setSidebar(false);
              }}
            >
              Novo cliente
            </div>
            <div
              className={`${
                activeNew ? " " : "fw-bold "
              }fs-5 border-bottom m-3 mt-2`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setActiveNew(false);
                setSidebar(false);
              }}
            >
              Lista de clientes
            </div>
          </div>
        </nav>
      </>
    </>
  );
};
