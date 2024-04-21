
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

type VideoType = {
  id: number;
  title: string;
  created_at: string;
  image: string;
};

const Blog = () => {
  const VideoItems: VideoType[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blogimg1.svg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blogimg2.svg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blagimg3.svg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blogimg1.svg",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blogimg2.svg",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "28.03.2024",
      image: "../blogimg1.svg",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="blogs-wrappered">
      <div className="blogs-container">
        <div className="toptitle">
          <h1>Bloq</h1>
        </div>

        <Swiper 
         breakpoints={{
          1200: {
            slidesPerView: 3
          },
          968: {
            slidesPerView: 2,
          },
          268: {
            slidesPerView: 1,
          },
        }}
        navigation={true} modules={[Navigation]} className="mySwiperVideo" slidesPerView={3} spaceBetween={20}>
          {VideoItems.map((item: VideoType, i: number) => (
            <SwiperSlide key={i} onClick={() => navigate(`/bloq/${i}-${item.title}`)}>
              <div className="blog-wrapper">
                <img src={item.image} alt="" />
              </div>
              <span>{item.created_at}</span>
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="show-all-button-area">
          <Link to="/bloq" className="btn-all">
            Hamısına bax
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
