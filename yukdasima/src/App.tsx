import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./styles/global.scss";
import Home from "./components/Wrapper/home/Home";
import "./styles/components/wrapper.scss";
import AboutPage from "./components/Wrapper/Aboutpage/AboutPage";
import ServicePage from "./components/Wrapper/ServicesPage/ServicePage";
import InnerService from "./components/Wrapper/ServicesPage/uitils/InnerService";
import GalleryPage, { Images, ImagesType } from "./components/Wrapper/GalleryPage/GalleryPage";
import VideoPage from "./components/Wrapper/VideosPage/VideoPage";
import { useImageModal } from "./context/ImageModal";
import React from "react";
import BlogPage from "./components/Wrapper/BlogPage/BlogPage";
import BlogInnerPage from "./components/Wrapper/BlogPage/uitils/BlogInnerPage";
import CorporativePage from "./components/Wrapper/CorporativePage/CorporativePage";
import ContactPage from "./components/Wrapper/ContactPage/ContactPage";
import Responsiveheader from "./components/Header/uitils/Responsiveheader";
import './styles/pageresponsive.scss';

const App = () => {
  const { setImgModal, imgModal } = useImageModal();

  //if outside click close modal
  const appReferance = React.useRef<HTMLImageElement | null>(null);
  React.useEffect(() => {
    const outsideClick = (e: any) => {
      if (appReferance.current && !appReferance.current.contains(e.target as Node)) {
        setImgModal(null);
      }
    };

    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);

  //if window inner width show new header
  const [headerNew, setHeaderNew] = React.useState<boolean>(false);
  React.useEffect(() => {
    const controlSize = () => {
      if (window.innerWidth <= 1160) {
        setHeaderNew(true);
      } else {
        setHeaderNew(false);
      }
    };

    controlSize();

    window.addEventListener("resize", controlSize);
    return () => {
      window.removeEventListener("resize", controlSize);
    };
  }, []);

  return (
    <div className="app">
      {Images.map((item: ImagesType, i: number) => (
        <React.Fragment key={i}>
          {imgModal === i && (
            <div className="modal-wrapper" key={i}>
              <img src={item.image} alt={`${i}-image`} ref={appReferance} />
            </div>
          )}
        </React.Fragment>
      ))}

{/* if window inner width short,, set new header */}
      {headerNew ? <Responsiveheader /> : <HeaderContainer />}
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />

        <Route
          path="/haqqimizda"
          element={
            <Wrapper>
              <AboutPage />
            </Wrapper>
          }
        />

        <Route
          path="/xidmetler"
          element={
            <Wrapper>
              <ServicePage />
            </Wrapper>
          }
        />

        <Route
          path="/xidmetler/:innerID"
          element={
            <Wrapper>
              <InnerService />
            </Wrapper>
          }
        />

        <Route
          path="/qalereya"
          element={
            <Wrapper>
              <GalleryPage />
            </Wrapper>
          }
        />
        <Route
          path="/videolar"
          element={
            <Wrapper>
              <VideoPage />
            </Wrapper>
          }
        />

        <Route
          path="/bloq"
          element={
            <Wrapper>
              <BlogPage />
            </Wrapper>
          }
        />

        <Route
          path="/bloq/:innerBlogID"
          element={
            <Wrapper>
              <BlogInnerPage />
            </Wrapper>
          }
        />

        <Route
          path="/korporativ"
          element={
            <Wrapper>
              <CorporativePage />
            </Wrapper>
          }
        />
        <Route
          path="/elaqe"
          element={
            <Wrapper>
              <ContactPage />
            </Wrapper>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
