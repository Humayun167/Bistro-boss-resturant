import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Freatures from "../Features/Freatures";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./../Banner/Banner";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Freatures></Freatures>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
