import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";
export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const cartQuantity =
    useSelector((state) => state.cart.items).find(
      (item) => item.documentId.toString() == id
    )?.cartQuantity || 0;
  const dispatch = useDispatch();
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
      <Stack
        sx={{
          flexDirection: "row",
          height: "100vh",
          width: "100%",
          mt: "16px",
          gap: "32px",
        }}
      >
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
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[0].url}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[1].url}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[2].url}
              />
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
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[0].url}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[1].url}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_FILE_URL + product?.images[2].url}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "20px",
          }}
        >
          <Rating
            sx={{
              color: "black",
              fontSize: "16px",
              marginBottom: "5px",
            }}
            name="text-feedback"
            value={`${product?.star}`}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: "36px" }}
          >
            {product?.name.split(" ").slice(0, 3).join(" ")}
          </Typography>
          <Typography
            sx={{ opacity: "0.7", marginBottom: "5px", fontSize: "16px" }}
          >
            {product?.description}
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
            sx={{
              marginBottom: "5px",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              width: "100%",
              pb: "24px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
              ${product?.price - (product?.price * product?.offer) / 100}
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through !important",
                opacity: "0.5",
                fontSize: "28px",
              }}
            >
              ${product?.price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
              gap: "20px",
              alignItems: "center",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              pb: "24px",
            }}
          >
            <Typography fontWeight={"bold"} whiteSpace={"nowrap"}>
              Offer expires in:
            </Typography>
            <Box
              display={"flex !important"}
              flexDirection={"row !important"}
              gap={"20px"}
              width={"100%"}
            >
              <Box
                width={"70%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
              >
                <Box
                  fontSize={"32px"}
                  height={"60px"}
                  width={"60px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "#F3F5F7" }}
                >
                  03
                </Box>
                Days
              </Box>
            </Box>
            <Box
              width={"70%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={"bold"}
            >
              <Box
                fontSize={"32px"}
                height={"60px"}
                width={"60px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "#F3F5F7" }}
              >
                {new Date().getHours()}
              </Box>
              Hours
            </Box>
            <Box
              width={"70%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={"bold"}
            >
              <Box
                fontSize={"32px"}
                height={"60px"}
                width={"60px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "#F3F5F7" }}
              >
                {new Date().getMinutes()}
              </Box>
              Minutes
            </Box>
            <Box
              width={"70%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={"bold"}
            >
              <Box
                fontSize={"32px"}
                height={"60px"}
                width={"60px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "#F3F5F7" }}
              >
                {setInterval(() => {
                  new Date().getSeconds();
                }, 1000)}
              </Box>
              Seconds
            </Box>
          </Box>
          <Box>
            <Typography sx={{ opacity: "0.7" }} fontWeight={"bold"} mb={"10px"}>
              Measurements
            </Typography>
            <Typography>17 1/2x20 5/8 "</Typography>
          </Box>
          <Box>
            <Typography
              gap={"10px"}
              display={"flex"}
              alignItems={"center"}
              sx={{ opacity: "0.7" }}
              fontWeight={"bold"}
              mb={"10px"}
            >
              Choose Color{" "}
              <ArrowForwardIosRoundedIcon sx={{ fontSize: "14px" }} />
            </Typography>
            <Typography>Black</Typography>
          </Box>
          <Box width={"100%"} height={"10%"} display={"flex"} gap={"10px"}>
            <Box
              sx={{
                width: "25%",
                height: "80%",
                backgroundColor: "#F3F5F7",
                borderRadius: "10px",
                display: cartQuantity === 0 ? "none" : "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "32px",
              }}
            >
              <Typography
                sx={{ fontSize: "32px", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => dispatch(removeItem(product.documentId))}
              >
                -
              </Typography>
              <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
                {cartQuantity}
              </Typography>
              <Typography
                sx={{ fontSize: "32px", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => dispatch(addItem(product))}
              >
                +
              </Typography>
            </Box>
            <Box
              sx={{
                width: cartQuantity === 0 ? "100%" : "75%",
                height: "80%",
                backgroundColor: "#F3F5F7",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: "32px",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "32px" }}>
                <FavoriteBorderRoundedIcon sx={{ fontSize: "24px" }} />{" "}
                Whishlist
              </Typography>
            </Box>
          </Box>
          <Button
          disabled={cartQuantity !== 0}
            sx={{
              width: "100%",
              height: "8%",
              backgroundColor: "#141718",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: "32px",
              cursor: "pointer",
              opacity: cartQuantity === 0 ? 1 : 0.7,
            }}
            onClick={() => dispatch(addItem(product))}
          >
            <Typography sx={{ fontSize: "32px", color: "white" }}>
              Add to Cart
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
