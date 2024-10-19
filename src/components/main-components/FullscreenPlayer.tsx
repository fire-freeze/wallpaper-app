import React from "react";

interface PropTypes {
  url: string;
}

const FullscreenPlayer: React.FC<PropTypes> = ({ url }) => {
  return (
    <div className="fullscreen-player">
      <img src={url} alt="wallpaper-img" width={"100%"} height={"100%"} />
    </div>
  );
};

export default FullscreenPlayer;
