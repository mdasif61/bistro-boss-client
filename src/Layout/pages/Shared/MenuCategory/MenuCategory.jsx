import React from "react";
import ManuItem from "../ManuItem/ManuItem";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, title, img }) => {
  return (
    <>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-5">
        {item.map((item) => (
          <ManuItem key={item._id} item={item}></ManuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline">Order Now</button>
      </Link>
    </>
  );
};

export default MenuCategory;
