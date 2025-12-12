import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from 'swiper/modules';
import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";
import NewArrivalCard from "./NewArrivslCard";
import { useNavigate } from "react-router-dom";
export default function NewArrival() {
    const [newArrivals,setNewArrivals]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        (async()=>{
            const response=await fetchData('products?pagination[page]=1&pagination[pageSize]=7&populate=*')
            setNewArrivals(response?.data)
        })()
    },[])
    const items=newArrivals?.map((news)=>(
         <SwiperSlide key={news?.documentId}><NewArrivalCard product={news}/></SwiperSlide>
    ))

 console.log(newArrivals)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        marginTop: "64px",
        marginBottom: "64px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} component={"h3"} variant="h4">
          New <br /> Arrivals
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid black",
          }}
          onClick={() => navigate(`/products`)}
        >
          More Products
          <ArrowForwardIcon />
        </Typography>
      </Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
          scrollbar={{
          hide: false,
        }}
        modules={[Pagination,Scrollbar]}
        className="newSwiper"
      >
        {items}
      </Swiper>
    </Box>
  );
}
