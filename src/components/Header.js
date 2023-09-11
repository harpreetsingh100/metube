import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/appSlice";

const Header = () => {
  const { isSidebarOpen } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex justify-between px-6 py-4 items-center shadow-lg h-[10vh]">
      <div className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt="menu"
          className="h-8 cursor-pointer duration-300"
          onClick={handleToggleMenu}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt="logo"
          className="h-8 ml-4 "
        />
      </div>
      <div>
        <input type="text" className="border w-[400px] p-2 rounded-l-full" />
        <button className="rounded-r-full border px-4 py-2"> 🔍 </button>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7qb6M35DtuEm0hq73034H7A49PWD4naSePuot08BbOyxlh62dTD8m72gWFEj-kwkM8U&usqp=CAU"
          alt="user"
          className=" h-10 "
        />
      </div>
    </div>
  );
};

export default Header;
