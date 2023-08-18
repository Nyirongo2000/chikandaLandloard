import React from "react";
import { Outlet } from "react-router-dom";
import Intro from "../components/Intro";
import DamyData from "../components/DamyData";

const Layout = () => {
  return (
    <>
      <Intro />
      <DamyData/>
      <Outlet />
    </>
  );
};

export default Layout;
