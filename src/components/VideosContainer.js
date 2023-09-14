import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideoData } from "../redux/appSlice";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.app.videoData);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    dispatch(addVideoData(data?.items));
  };

  return (
    <div className="mt-2 border border-orange-600 flex flex-wrap justify-center">
      {data.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} key={video.id} />;
          </Link>
        );
      })}
    </div>
  );
};

export default VideosContainer;
