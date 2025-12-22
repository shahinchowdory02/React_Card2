import React from "react";
import { MdArrowOutward } from "react-icons/md";

const RightContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div className="p-6">
        <h3 className="mb-7 leading-[1.1] text-7xl font-bold">
          Categorizing <span className="text-gray-500">possible</span> customers
        </h3>
        <p className="text-xl font-medium text-gray-600 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatum eos alias unde consectetur maxime repellat hic, sunt
          deserunt beatae neque similique non officiis dolor omnis vero, ratione
          expedita nihil.
        </p>
      </div>
      <div className="text-5xl font-bold">
        <MdArrowOutward />
      </div>
    </div>
  );
};

export default RightContent;
