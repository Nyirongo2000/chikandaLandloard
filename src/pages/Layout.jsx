import React from "react";
import { Outlet } from "react-router-dom";
import Intro from "../components/Intro";
import Display from "../components/Display";
import DamyData from "../components/DamyData";
import { Button, Tooltip } from "@material-tailwind/react";

const Layout = () => {
  return (
    <>
      <Intro />
      {/* <DamyData/> */}
      <Display />
      <Outlet />
    </>
  );
};

export default Layout;
