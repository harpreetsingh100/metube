import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails } = snippet;
  const { title, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-72 flex flex-wrap justify-center">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg my-2"
      />
      <ul>
        <li className="font-bold">{title.slice(0, 55)} ....</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
