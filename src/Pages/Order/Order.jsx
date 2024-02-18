import { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../Components/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
const Order = () => {
    const [tabIndex, setTabIndex] = useState()
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div >
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
            <div className="grid md:grid-cols-3">
            {
                salad.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3">
          {
                desserts.map(item => <FoodCard
                key={item._id}
                ></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
