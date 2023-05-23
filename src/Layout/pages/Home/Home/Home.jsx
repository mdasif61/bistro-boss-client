import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularCategory from "../../Shared/PopularCategory/PopularCategory";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularCategory></PopularCategory>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
