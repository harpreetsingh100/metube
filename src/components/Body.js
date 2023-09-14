import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const { isSidebarOpen } = useSelector((store) => store.app);

  return (
    <div className="grid grid-flow-col">
      {isSidebarOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
