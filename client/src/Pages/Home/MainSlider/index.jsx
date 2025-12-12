import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function MainSlider() {
  const [sliders, setSliders] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("sliders?populate=*");
      setSliders(response.data);
    })();
  }, []);
console.log(sliders)
  const items = sliders?.map((slider) => (
    <SwiperSlide key={slider.id}>
      <img src={import.meta.env.VITE_FILE_URL + slider?.image?.url} alt="hfg" />
    </SwiperSlide>
  ));
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        px: "132px",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSlider"
      >
        {items}
      </Swiper>
    </Box>
  );
}
