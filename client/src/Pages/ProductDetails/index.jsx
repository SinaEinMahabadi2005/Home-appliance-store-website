import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData(`products/${id}?populate=*`);
      setProduct(response?.data);
    })();
  }, [id]);
  console.log(product);
  return (
    <Box sx={{ px: "132px", mt: "24px" }}>
      <Typography
        sx={{
          wordSpacing: "24px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "24px",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        Home <ArrowForwardIosRoundedIcon /> Shop <ArrowForwardIosRoundedIcon />{" "}
        <Typography sx={{ wordSpacing: "1px" }}>
          {" "}
          {product?.categories[0]?.title}
        </Typography>{" "}
        <ArrowForwardIosRoundedIcon /> Product
      </Typography>
      <Stack sx={{ flexDirection: "row", height: "100vh", width: "100%", mt:'16px', gap:'32px'}}>
        <Box width={"45%"} height={"100%"}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2Details"
          >
            <SwiperSlide >
              <img src={import.meta.env.VITE_FILE_URL+product?.images[0].url} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={import.meta.env.VITE_FILE_URL+product?.images[1].url} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={import.meta.env.VITE_FILE_URL+product?.images[2].url} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiperDetails"
          >
             <SwiperSlide>
              <img src={import.meta.env.VITE_FILE_URL+product?.images[0].url} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={import.meta.env.VITE_FILE_URL+product?.images[1].url} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={import.meta.env.VITE_FILE_URL+product?.images[2].url} />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Stack>
    </Box>
  );
}
