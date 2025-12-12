import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
export default function NewArrivalCard({ product }) {
  const navigate=useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "70%",
          width: "100%",
          "&:hover button": {
            opacity: "1",
            visibility: "visible",
          },
        }}
      >
        <img
          src={import.meta.env.VITE_FILE_URL + product?.images[0]?.url}
          alt="dss"
          style={{ width: "100%" }}
        />
        <Typography
          position={"absolute"}
          sx={{
            position: "absolute",
            left: "20px",
            top: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            px: "7px",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          }}
        >
          New
        </Typography>
        <Typography
          position={"absolute"}
          sx={{
            position: "absolute",
            left: "20px",
            top: "50px",
            fontWeight: "bold",
            backgroundColor: "white",
            px: "5px",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
            color: "white",
            backgroundColor: "#38CB89",
          }}
        >
          -{product?.offer}%
        </Typography>
        <FavoriteBorderIcon
          sx={{
            position: "absolute",
            right: "20px",
            top: "20px",
            px: "5px",
            borderRadius: "50%",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
            color: "black",
            fontSize: "20px",
            backgroundColor: "white",
            transition: "all .5s",
            opacity: "0.5",
            "&:hover": { opacity: "1" },
          }}
        />
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translateX(-50%)",
            px: "80px",
            py: "10px",
            whiteSpace: "nowrap",
            fontSize: "12px",
            opacity: "0",
            visibility: "hidden",
            transition: "all .5s",
          }}
        >
          Add to Cart
        </Button>
      </Box>
      <Box>
        <Rating
          sx={{
            color: "black",
            fontSize: "16px",
            marginBottom: "5px",
          }}
          name="text-feedback"
          value={product.star}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Typography sx={{ fontWeight: "bold" , marginBottom: "5px" }}>
          {product.name.split(" ").slice(0, 3).join(" ")}
        </Typography>
        <Box display={"flex"} gap={"20px"} sx={{marginBottom: "5px",}}>
          <Typography sx={{ fontWeight: "bold", }}>${product.price-(product.price*product.offer/100)}</Typography>
          <Typography sx={{ textDecoration: "line-through !important",opacity: "0.5" }}>
            ${product.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
