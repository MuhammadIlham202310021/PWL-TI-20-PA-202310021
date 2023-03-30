import React from "react";
import Footers from "./components/footers/Footer.js";
import HeaderNav from "./components/headers/HeaderNav.js";
import ModalPopUp from "./components/modals/ModalPopUp";

export default function layouts(props)  {
  return (
    <div id="main-layout">
      <HeaderNav />

      <main className="mt-20 py-10">{props.children}</main>

      <Footers />
      <ModalPopUp />
    </div>
  );
};
