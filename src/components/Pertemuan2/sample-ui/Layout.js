import React from "react";

export default function Layout(props) {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column">
          <h1 className="pb-4 text-white text-center">{props.title}</h1>
          <div className="w-lg-500px bg-body rounded shadow-sm mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
