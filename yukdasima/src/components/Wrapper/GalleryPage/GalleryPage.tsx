import { PaginationItem } from "@mui/material";
import "../../../styles/components/gallerypage.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useImageModal } from "../../../context/ImageModal";

export type ImagesType = {
  id: number;
  image: string;
};

export const Images: ImagesType[] = [
  { id: 1, image: "../sekil1.jpg" },
  { id: 2, image: "../sekil2.jpg" },
  { id: 3, image: "../sekil3.jpg" },
  { id: 4, image: "../sekil4.png" },
  { id: 5, image: "../sekil5.jpg" },
  { id: 6, image: "../sekil6.jpg" },
  { id: 7, image: "../sekil2.jpg" },
  { id: 8, image: "../sekil3.jpg" },
  { id: 9, image: "../sekil4.png" },
  { id: 10, image: "../sekil5.jpg" },
  { id: 11, image: "../sekil3.jpg" },
  { id: 13, image: "../sekil1.jpg" },
  { id: 14, image: "../sekil1.jpg" },
  { id: 15, image: "../sekil2.jpg" },
  { id: 16, image: "../sekil3.jpg" },
  { id: 17, image: "../sekil4.png" },
  { id: 18, image: "../sekil5.jpg" },
  { id: 19, image: "../sekil6.jpg" },
  { id: 20, image: "../sekil2.jpg" },
  { id: 21, image: "../sekil3.jpg" },
  { id: 22, image: "../sekil4.png" },
  { id: 23, image: "../sekil5.jpg" },
  { id: 24, image: "../sekil3.jpg" },
  { id: 25, image: "../sekil1.jpg" },
];

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedImages = Images.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (e: any, page: number) => {
    setCurrentPage(page);
    console.log(e);
  };

  const { setImgModal } = useImageModal();
  const handleModal = (i:number) => {
    setImgModal(i);
  } 

  return (
    <div className="gallery-page">
      <div className="gallery-title">
        <h1>Şəkillər</h1>
      </div>

      <div className="grid-images">
        {displayedImages.map((image: ImagesType, i: number) => (
          <div key={i} className="image-item"
          onClick={() => handleModal(i)}
          >
            <img src={image.image} alt={`${i}-image`} />
          </div>
        ))}
      </div>

      <div className="pagination-area">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(Images.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="text"
            color="primary"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem slots={{ previous: IoMdArrowBack, next: IoMdArrowForward }} {...item} />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default GalleryPage;
