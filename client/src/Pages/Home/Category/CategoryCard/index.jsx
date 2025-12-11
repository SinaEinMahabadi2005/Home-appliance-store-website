import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
export default function CategoryCard({ category }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        
        gap: "32px",
        backgroundColor: "#F3F5F7",
        height: "100%",
        width: "100%",
        position:'relative'
      }}
    >
      <Typography component={"h3"} variant="h4" sx={{ fontWeight: "bold", position:'absolute',left:'48px',top:'48px' }}>
        {category?.title}
      </Typography>
      <Typography
        sx={{ cursor: "pointer", display: "flex", alignItems: "center", position:'absolute',left:'48px',top:'100px' , borderBottom:'1px solid black' }}
        onClick={() =>
          navigate(
            `/products/${category.id}/${category.title.replaceAll(" ", "-")}`
          )
        }
      >
        Shop Now <ArrowForwardIcon />
      </Typography>
      <img
        src={import.meta.env.VITE_FILE_URL + category?.image?.url}
        alt={category?.title}
        style={{ height: "100%", width: "100%" }}
      />
    </Box>
  );
}
