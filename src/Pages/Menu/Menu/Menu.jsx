import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu//dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* Main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Todays offer"
      ></SectionTitle>
      {/* offerd */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        Img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={pizza} title="pizza" Img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" Img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" Img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
