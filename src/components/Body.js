import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const { isSidebarOpen } = useSelector((store) => store.app);

  return (
    <div className="grid grid-flow-col">
      {isSidebarOpen && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
