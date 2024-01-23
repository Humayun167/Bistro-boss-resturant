
import Category from '../Category/Category';
import Freatures from '../Features/Freatures';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './../Banner/Banner';
const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Freatures></Freatures>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;