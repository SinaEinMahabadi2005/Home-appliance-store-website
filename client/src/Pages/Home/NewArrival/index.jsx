import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar } from 'swiper/modules';
import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";
import NewArrivalCard from "./NewArrivslCard";
import { useNavigate } from "react-router-dom";

export default function NewArrival() {
    const [newArrivals, setNewArrivals] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        (async() => {
            const response = await fetchData('products?pagination[page]=1&pagination[pageSize]=7&sort=updatedAt:desc&populate=*');
            setNewArrivals(response?.data);
        })();
    }, []);
    
    const items = newArrivals?.map((news) => (
        <SwiperSlide key={news?.documentId}>
            <NewArrivalCard product={news} />
        </SwiperSlide>
    ));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
                marginTop: { xs: "32px", sm: "48px", md: "64px" },
                marginBottom: { xs: "32px", sm: "48px", md: "64px" },
                px: { xs: "16px", sm: "24px", md: "48px", lg: "64px", xl: "132px" },
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: "16px", sm: "0" },
                    width: "100%",
                }}
            >
                <Typography 
                    sx={{ 
                        fontWeight: "bold",
                        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.5rem" },
                        lineHeight: 1.2,
                    }} 
                    component={"h3"} 
                    variant="h4"
                >
                    New <br /> Arrivals
                </Typography>
                <Typography
                    sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                        whiteSpace: "nowrap",
                        "&:hover": {
                            borderBottom: "2px solid black",
                        },
                        transition: "border-bottom 0.3s ease",
                    }}
                    onClick={() => navigate(`/products`)}
                >
                    More Products
                    <ArrowForwardIcon sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, ml: 0.5 }} />
                </Typography>
            </Box>
            
            <Box sx={{ 
                width: "100%", 
                overflow: "visible",
                padding: { xs: "8px 0", sm: "12px 0", md: "16px 0" },
            }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    scrollbar={{
                        hide: false,
                        draggable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 12,
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 24,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 28,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Scrollbar]}
                    className="newSwiper"
                >
                    {items}
                </Swiper>
            </Box>
        </Box>
    );
}