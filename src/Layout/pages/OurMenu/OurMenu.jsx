import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from '../../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salad");
  const soup =menu.filter(item=>item.category==='soup')
  const pizza =menu.filter(item=>item.category==='pizza')

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      ></Cover>
      <SectionHeader
        heading={"Todays Offer"}
        subHeading={"Do not miss!"}
      ></SectionHeader>

      <MenuCategory item={offered}></MenuCategory>
      <MenuCategory
        item={dessert}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        item={salads}
        title={"salads"}
        img={saladsImg}
      ></MenuCategory>
      <MenuCategory item={soup} title={'soup'} img={soupImg}></MenuCategory>
      <MenuCategory item={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
    </div>
  );
};

export default OurMenu;
