import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

export default function CategoryCard({ category }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      `/products/${category.documentId || category.id}/${category.title.replaceAll(" ", "-")}`
    );
  };

  return (
    <Box
      sx={{
        gap: { xs: "16px", sm: "24px", md: "32px" },
        height: { xs: "250px", sm: "300px", md: "350px", lg: "100%" },
        width: "100%",
        position: "relative",
        perspective: "1000px", 
        cursor: 'pointer',
        minHeight: { xs: "250px", sm: "300px" },
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      <Typography
        component={"h3"}
        variant="h4"
        sx={{
          fontWeight: "bold",
          position: "absolute",
          left: { xs: "16px", sm: "24px", md: "32px", lg: "48px" },
          top: { xs: "16px", sm: "24px", md: "32px", lg: "48px" },
          zIndex: '1000',
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2rem" },
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
          left: { xs: "16px", sm: "24px", md: "32px", lg: "48px" },
          top: { xs: "48px", sm: "64px", md: "80px", lg: "100px" },
          zIndex: '1000',
          borderBottom: "1px solid black",
          fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
          paddingBottom: "2px",
        }}
        onClick={handleClick}
      >
        Shop Now <ArrowForwardIcon sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" } }} />
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