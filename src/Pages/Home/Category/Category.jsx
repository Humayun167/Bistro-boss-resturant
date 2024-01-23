import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import im1 from "../../../assets/home/slide1.jpg";
import im2 from "../../../assets/home/slide2.jpg";
import im3 from "../../../assets/home/slide3.jpg";
import im4 from "../../../assets/home/slide4.jpg";
import im5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={im1} alt="" />
          <h3 className="text-4xl uppercase text-center text-white  -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={im2} alt="" />
          <h3 className="text-4xl uppercase text-center text-white  -mt-20">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={im3} alt="" />
          <h3 className="text-4xl uppercase text-center text-white  -mt-20">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={im4} alt="" />
          <h3
            className="text-4xl uppercase text-center text-white  -mt-20
        "
          >
            Cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={im5} alt="" />
          <h3 className="text-4xl uppercase text-center text-white  -mt-20">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
