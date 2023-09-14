import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const key = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div>
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default WatchPage;
