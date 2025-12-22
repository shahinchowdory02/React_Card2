import React from "react";

import Image from "../../assets/img1.jpg";
import Section1 from "./Section1";

const RightContent = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        src={Image}
        alt="Section Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RightContent;
