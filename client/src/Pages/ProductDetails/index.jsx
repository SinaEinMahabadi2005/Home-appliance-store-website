import { Box, Button, Rating, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
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
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    (async () => {
      const response = await fetchData(`products/${id}?populate=*`);
      setProduct(response?.data);
    })();
  }, [id]);

  // Responsive padding
  const getHorizontalPadding = () => {
    if (isMobile) return "16px";
    if (isTablet) return "32px";
    if (isDesktop) return "64px";
    return "132px";
  };

  // Responsive layout direction
  const getStackDirection = () => {
    if (isMobile) return "column";
    return "row";
  };

  // Responsive width for image section
  const getImageWidth = () => {
    if (isMobile) return "100%";
    if (isTablet) return "50%";
    return "45%";
  };

  // Responsive width for details section
  const getDetailsWidth = () => {
    if (isMobile) return "100%";
    if (isTablet) return "50%";
    return "50%";
  };

  // Responsive stack height
  const getStackHeight = () => {
    if (isMobile) return "auto";
    return "100vh";
  };

  // Responsive font sizes
  const getFontSize = (mobile, tablet, desktop, largeDesktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    if (isDesktop) return desktop;
    return largeDesktop;
  };

  // Responsive spacing
  const getSpacing = (mobile, tablet, desktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  // Timer state for seconds
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  // Update seconds every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ 
      px: { xs: "16px", sm: "32px", md: "64px", lg: "132px" }, 
      mt: { xs: "16px", sm: "20px", md: "24px" },
      pb: { xs: "32px", sm: "40px", md: "48px" }
    }}>
      <Typography
        sx={{
          wordSpacing: { xs: "8px", sm: "16px", md: "24px" },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: { xs: "8px", sm: "16px", md: "24px" },
          fontWeight: "bold",
          fontSize: { xs: "10px", sm: "11px", md: "12px" },
          flexWrap: "wrap",
          mb: { xs: "16px", sm: "20px", md: "24px" },
        }}
      >
        Home <ArrowForwardIosRoundedIcon sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }} /> 
        Shop <ArrowForwardIosRoundedIcon sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }} /> 
        <Typography sx={{ wordSpacing: "1px" }}>
          {product?.categories[0]?.title}
        </Typography> 
        <ArrowForwardIosRoundedIcon sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }} /> 
        Product
      </Typography>
      
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "auto", md: "600px" },
          width: "100%",
          mt: { xs: "12px", sm: "16px", md: "16px" },
          gap: { xs: "24px", sm: "28px", md: "32px" },
        }}
      >
        {/* Image Gallery Section */}
        <Box sx={{ 
          width: { xs: "100%", sm: "100%", md: "45%" },
          height: { xs: "400px", sm: "500px", md: "100%" },
          minHeight: { xs: "400px", sm: "500px", md: "auto" }
        }}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={!isMobile} // Hide navigation arrows on mobile
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2Details"
          >
            {product?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={import.meta.env.VITE_FILE_URL + image?.url}
                  alt={`Product image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={isMobile ? 3 : 4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiperDetails"
            style={{
              marginTop: "10px",
            }}
          >
            {product?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={import.meta.env.VITE_FILE_URL + image?.url}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Product Details Section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: { xs: "12px", sm: "16px", md: "20px" },
          }}
        >
          <Rating
            sx={{
              color: "black",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              marginBottom: { xs: "3px", sm: "4px", md: "5px" },
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
            sx={{ 
              fontWeight: "bold", 
              marginBottom: { xs: "3px", sm: "4px", md: "5px" }, 
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              lineHeight: 1.2,
            }}
          >
            {product?.name.split(" ").slice(0, 3).join(" ")}
          </Typography>
          
          <Typography
            sx={{ 
              opacity: "0.7", 
              marginBottom: { xs: "3px", sm: "4px", md: "5px" }, 
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              lineHeight: 1.6,
            }}
          >
            {product?.description}
          </Typography>
          
          {/* Price Section */}
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={{ xs: "12px", sm: "16px", md: "20px" }}
            sx={{
              marginBottom: { xs: "3px", sm: "4px", md: "5px" },
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              width: "100%",
              pb: { xs: "16px", sm: "20px", md: "24px" },
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ 
              fontWeight: "bold", 
              fontSize: { xs: "24px", sm: "28px", md: "32px" } 
            }}>
              ${product?.price - (product?.price * product?.offer) / 100}
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through !important",
                opacity: "0.5",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
              }}
            >
              ${product?.price}
            </Typography>
          </Box>

          {/* Timer Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: "12px", sm: "16px", md: "20px" },
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              pb: { xs: "16px", sm: "20px", md: "24px" },
              width: "100%",
            }}
          >
            <Typography fontWeight={"bold"} whiteSpace={"nowrap"} fontSize={{ xs: "14px", sm: "16px" }}>
              Offer expires in:
            </Typography>
            
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={{ xs: "8px", sm: "12px", md: "20px" }}
              width={{ xs: "100%", sm: "auto" }}
              justifyContent={{ xs: "space-between", sm: "flex-start" }}
            >
              {/* Days */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
                minWidth={{ xs: "60px", sm: "70px" }}
              >
                <Box
                  fontSize={{ xs: "20px", sm: "24px", md: "28px", lg: "32px" }}
                  height={{ xs: "40px", sm: "50px", md: "60px" }}
                  width={{ xs: "40px", sm: "50px", md: "60px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "#F3F5F7", borderRadius: "4px" }}
                >
                  03
                </Box>
                <Typography fontSize={{ xs: "12px", sm: "14px" }}>Days</Typography>
              </Box>
              
              {/* Hours */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
                minWidth={{ xs: "60px", sm: "70px" }}
              >
                <Box
                  fontSize={{ xs: "20px", sm: "24px", md: "28px", lg: "32px" }}
                  height={{ xs: "40px", sm: "50px", md: "60px" }}
                  width={{ xs: "40px", sm: "50px", md: "60px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "#F3F5F7", borderRadius: "4px" }}
                >
                  {new Date().getHours().toString().padStart(2, '0')}
                </Box>
                <Typography fontSize={{ xs: "12px", sm: "14px" }}>Hours</Typography>
              </Box>
              
              {/* Minutes */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
                minWidth={{ xs: "60px", sm: "70px" }}
              >
                <Box
                  fontSize={{ xs: "20px", sm: "24px", md: "28px", lg: "32px" }}
                  height={{ xs: "40px", sm: "50px", md: "60px" }}
                  width={{ xs: "40px", sm: "50px", md: "60px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "#F3F5F7", borderRadius: "4px" }}
                >
                  {new Date().getMinutes().toString().padStart(2, '0')}
                </Box>
                <Typography fontSize={{ xs: "12px", sm: "14px" }}>Minutes</Typography>
              </Box>
              
              {/* Seconds */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
                minWidth={{ xs: "60px", sm: "70px" }}
              >
                <Box
                  fontSize={{ xs: "20px", sm: "24px", md: "28px", lg: "32px" }}
                  height={{ xs: "40px", sm: "50px", md: "60px" }}
                  width={{ xs: "40px", sm: "50px", md: "60px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "#F3F5F7", borderRadius: "4px" }}
                >
                  {seconds.toString().padStart(2, '0')}
                </Box>
                <Typography fontSize={{ xs: "12px", sm: "14px" }}>Seconds</Typography>
              </Box>
            </Box>
          </Box>

          {/* Measurements */}
          <Box>
            <Typography sx={{ opacity: "0.7" }} fontWeight={"bold"} mb={{ xs: "6px", sm: "8px", md: "10px" }}>
              Measurements
            </Typography>
            <Typography fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>17 1/2x20 5/8 "</Typography>
          </Box>

          {/* Color Selection */}
          <Box>
            <Typography
              gap={{ xs: "6px", sm: "8px", md: "10px" }}
              display={"flex"}
              alignItems={"center"}
              sx={{ opacity: "0.7" }}
              fontWeight={"bold"}
              mb={{ xs: "6px", sm: "8px", md: "10px" }}
              fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            >
              Choose Color{" "}
              <ArrowForwardIosRoundedIcon sx={{ fontSize: { xs: "12px", sm: "13px", md: "14px" } }} />
            </Typography>
            <Typography fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>Black</Typography>
          </Box>

          {/* Quantity and Wishlist */}
          <Box 
            width={"100%"} 
            height={{ xs: "auto", sm: "10%" }} 
            display={"flex"} 
            gap={{ xs: "8px", sm: "10px" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            {/* Quantity Selector */}
            <Box
              sx={{
                width: { xs: "100%", sm: cartQuantity === 0 ? "0%" : "25%", md: cartQuantity === 0 ? "0%" : "25%" },
                height: { xs: "48px", sm: "56px", md: "64px" },
                backgroundColor: "#F3F5F7",
                borderRadius: "10px",
                display: cartQuantity === 0 ? "none" : "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: { xs: "16px", sm: "24px", md: "32px" },
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                sx={{ 
                  fontSize: { xs: "24px", sm: "28px", md: "32px" }, 
                  fontWeight: "bold", 
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                onClick={() => dispatch(removeItem(product?.documentId))}
              >
                -
              </Typography>
              <Typography sx={{ 
                fontSize: { xs: "20px", sm: "24px", md: "32px" }, 
                fontWeight: "bold",
                lineHeight: 1,
              }}>
                {cartQuantity}
              </Typography>
              <Typography
                sx={{ 
                  fontSize: { xs: "24px", sm: "28px", md: "32px" }, 
                  fontWeight: "bold", 
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                onClick={() => dispatch(addItem(product))}
              >
                +
              </Typography>
            </Box>
            
            {/* Wishlist Button */}
            <Box
              sx={{
                width: { xs: "100%", sm: cartQuantity === 0 ? "100%" : "75%", md: cartQuantity === 0 ? "100%" : "75%" },
                height: { xs: "48px", sm: "56px", md: "64px" },
                backgroundColor: "#F3F5F7",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: "16px", sm: "24px", md: "32px" },
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <Typography sx={{ 
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <FavoriteBorderRoundedIcon sx={{ fontSize: { xs: "18px", sm: "20px", md: "24px" } }} /> 
                Whishlist
              </Typography>
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Button
            disabled={cartQuantity !== 0}
            sx={{
              width: "100%",
              height: { xs: "48px", sm: "56px", md: "64px", lg: "72px" },
              backgroundColor: "#141718",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: "16px", sm: "24px", md: "32px" },
              cursor: "pointer",
              opacity: cartQuantity === 0 ? 1 : 0.7,
              "&:hover": {
                backgroundColor: "#141718",
                opacity: 0.9,
              },
              "&:disabled": {
                backgroundColor: "#141718",
                opacity: 0.5,
                cursor: "not-allowed",
              },
            }}
            onClick={() => dispatch(addItem(product))}
          >
            <Typography sx={{ 
              fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "32px" }, 
              color: "white",
              fontWeight: "bold",
            }}>
              {cartQuantity === 0 ? "Add to Cart" : "Added to Cart"}
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}