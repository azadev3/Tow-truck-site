import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

type VideoType = {
  id: number;
  title: string;
  created_at: string;
  video: string;
};

const Videos = () => {
  const VideoItems: VideoType[] = [
    {
      id: 1,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
    {
      id: 2,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
    {
      id: 3,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
    {
      id: 4,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
    {
      id: 5,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
    {
      id: 6,
      title: "Lorem ipsum lorem ipsum",
      created_at: "28.03.2024",
      video: "../video.mp4",
    },
  ];

  //if hover play button change color
  const [hoverPlyBtn, setHover] = React.useState<{ [key: number]: boolean }>({});

  const handleHover = (i: number) => {
    setHover(() => ({
      [i]: true,
    }));
  };
  const handleLeave = (i: number) => {
    setHover(() => ({
      [i]: false,
    }));
  };

  //play video function
  const [play, setPlay] = React.useState<{ [key: number]: boolean }>({});
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const playVideo = (i: number) => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlay(() => ({
        [i]: true,
      }));
    }
  };

  return (
    <div className="videos-wrappered">
      <div className="videos-container">
        <div className="toptitle">
          <h1>Videolar</h1>
        </div>
        <div className="navigate-to-all-videos-btn">
          <Link to="/videolar" className="all-videos">
            Bütün videolar
            <FaArrowRight className="right-icon" />
          </Link>
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
            <SwiperSlide key={i}>
              <div className="video-wrapper">
                <video
                  autoPlay
                  ref={videoRef}
                  src={item.video}
                  muted={play[i] ? false : true}
                  controls={play[i] ? true : false}></video>

                <img
                  id="play_btn"
                  className="ply_btn"
                  onClick={() => playVideo(i)}
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={() => handleLeave(i)}
                  style={{ display: play[i] ? "none" : "block" }}
                  src={hoverPlyBtn[i] ? "../playbtnyellow.svg" : "../playbtn.svg"}
                  alt=""
                />
              </div>
              <span>{item.created_at}</span>
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Videos;
