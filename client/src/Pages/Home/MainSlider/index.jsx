import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function MainSlider() {
  const [sliders, setSliders] = useState();
  const theme = useTheme();
  
  // Media queries for different screen sizes
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    (async () => {
      const response = await fetchData("sliders?populate=*");
      setSliders(response.data);
    })();
  }, []);

  const items = sliders?.map((slider) => (
    <SwiperSlide key={slider.id}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img 
          src={import.meta.env.VITE_FILE_URL + slider?.image?.url} 
          alt="slider" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </SwiperSlide>
  ));

  // Responsive height calculations
  const getSliderHeight = () => {
    if (isMobile) return "50vh"; // Smaller height on mobile
    if (isTablet) return "60vh"; // Medium height on tablet
    return "70vh"; // Original height on desktop
  };

  // Responsive padding calculations
  const getHorizontalPadding = () => {
    if (isMobile) return "16px";
    if (isTablet) return "24px";
    if (isDesktop) return "132px";
    return "132px"; // Original padding on large desktop
  };

  // Responsive Swiper configuration
  const getSwiperConfig = () => {
    const baseConfig = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: true,
      modules: [Autoplay, Pagination, Navigation],
      className: "mainSlider",
    };

    // Adjust navigation visibility based on screen size
    if (isMobile) {
      return {
        ...baseConfig,
        navigation: false, // Hide arrows on mobile for better touch experience
        pagination: {
          ...baseConfig.pagination,
          dynamicBullets: true,
        },
      };
    }

    return baseConfig;
  };

  return (
    <Box
      sx={{
        
        height: getSliderHeight(),
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        px: getHorizontalPadding(),
        // Add responsive margins
        mt: { xs: 0, sm: 0, md: 0 },
        mb: { xs: 2, sm: 3, md: 4 },
        // Ensure proper container
        position: "relative",
        "& .swiper": {
          width: "100%",
          height: "100%",
        },
        "& .swiper-slide": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Swiper {...getSwiperConfig()}>
        {items}
      </Swiper>
    </Box>
  );
}