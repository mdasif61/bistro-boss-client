import React, { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categorys=['pizza','dessert','soup','salads','offered'];
  const {category}=useParams()
  const initialIndex=categorys.indexOf(category)
  const [tab, setTab] = useState(initialIndex);
  const [menu]=useMenu()
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover img={orderImg} title={"Order"}></Cover>
      <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Salads</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
            <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
