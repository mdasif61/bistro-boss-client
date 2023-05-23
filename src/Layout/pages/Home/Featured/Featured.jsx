import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import featuredImg from "../../../../assets/home/featured.jpg";
import "../Featured/Featured.css";

const Featured = () => {
  return (
    <div className="featured-bg p-10">
      <div className="pt-10">
        <SectionHeader
          heading={"From Our Menu"}
          subHeading={"chek it out"}
        ></SectionHeader>
      </div>

      <div className="flex text-white">
        <div className="flex w-1/2 items-center justify-center p-20">
          <img src={featuredImg} alt="" />
        </div>
        <div className="p-5 w-1/2 flex items-center justify-center">
          <div>
            <h1>March 20, 2023</h1>
            <h1 className="uppercase text-xl">WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
