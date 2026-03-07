
import React from "react";

const HomeImg = () => {
  return (
    <div className="flex gap-4 w-full lg:w-1/2">

      <div className="flex-1 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1654005018306-7066fc118281?w=600"
          alt=""
        />
      </div>

      <div className="flex-1 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1715876268857-5bd56d738573?w=600"
          alt=""
        />
      </div>

    </div>
  );
};

export default HomeImg;

