import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

export default function CategoryCard({ category }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        gap: "32px",
        // backgroundColor: "#F3F5F7",
        height: "100%",
        width: "100%",
        position: "relative",
        perspective: "1000px", 
        cursor:'pointer' ,
      }}
      onClick={() =>
          navigate(
            `/products/${category.id}/${category.title.replaceAll(" ", "-")}`
          )
        }
    >
      <Typography
        component={"h3"}
        variant="h4"
        sx={{
          fontWeight: "bold",
          position: "absolute",
          left: "48px",
          top: "48px",
          zIndex:'1000'
        }}
      >
        {category?.title}
      </Typography>

      <Typography
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "48px",
          top: "100px",
          zIndex:'1000' ,
          borderBottom: "1px solid black",
        }}
        onClick={() =>
          navigate(
            `/products/${category.id}/${category.title.replaceAll(" ", "-")}`
          )
        }
      >
        Shop Now <ArrowForwardIcon />
      </Typography>

      
      <motion.img
        src={import.meta.env.VITE_FILE_URL + category?.image?.url}
        alt={category?.title}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.05,
          rotateX: 10,
          rotateY: 10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </Box>
  );
}