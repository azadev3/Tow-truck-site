import { PaginationItem } from "@mui/material";
import "../../../styles/components/videopage.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

type videoType = {
  id: number;
  video: string;
};

const Videos: videoType[] = [
  { id: 1, video: "../video.mp4" },
  { id: 2, video: "../video.mp4" },
  { id: 3, video: "../video.mp4" },
  { id: 4, video: "../video.mp4" },
  { id: 5, video: "../video.mp4" },
  { id: 6, video: "../video.mp4" },
  { id: 7, video: "../video.mp4" },
  { id: 8, video: "../video.mp4" },
  { id: 9, video: "../video.mp4" },
  { id: 10,video: "../video.mp4" },
  { id: 11,video: "../video.mp4" },
  { id: 13,video: "../video.mp4" },
  { id: 14,video: "../video.mp4" },
  { id: 15,video: "../video.mp4" },
  { id: 16,video: "../video.mp4" },
  { id: 17,video: "../video.mp4" },
  { id: 18,video: "../video.mp4" },
  { id: 19, video: "../video.mp4" },
  { id: 20, video: "../video.mp4" },
  { id: 21, video: "../video.mp4" },
  { id: 22, video: "../video.mp4" },
  { id: 23, video: "../video.mp4" },
  { id: 24, video: "../video.mp4" },
  { id: 25, video: "../video.mp4" },
];

const VideoPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedVideo = Videos.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (e: any, page: number) => {
    setCurrentPage(page);
    console.log(e)
  };

  //play video on clicked play btn 
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = React.useState<number | null>(null);
  const handlePlay = (i:number) => {
     if(videoRef.current) {
          setPlaying(i);
          videoRef.current.play();
     }
  }

  return (
    <div className="video-page">
      <div className="video-title">
        <h1>Videolar</h1>
      </div>

      <div className="grid-videos">
        {displayedVideo.map((video: videoType, i: number) => (
          <div key={i} className="video-item">
            <video src={video.video} ref={videoRef} 
            controls={playing === i ? true : false}
            autoPlay
            muted={playing === i ? false : true}
            />
            <img className="play-btn" src="../playbtn.svg" alt="" 
            style={{display: playing === i ? 'none' : ''}}
            onClick={() => handlePlay(i)}/>
          </div>
        ))}
      </div>

      <div className="pagination-area">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(Videos.length / itemsPerPage)}
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

export default VideoPage;
