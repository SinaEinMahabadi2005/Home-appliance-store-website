import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Atropos
      className="my-atropos"
      activeOffset={isMobile ? 20 : 40}
      rotateXMax={isMobile ? 10 : 20}
      rotateYMax={isMobile ? 10 : 20}
      shadow={false}
      style={{ 
        width: "100%", 
        height: "100%", 
        cursor: 'pointer',
        touchAction: 'pan-y' // Better touch handling
      }}
      onClick={() =>
        navigate(
          `/product-details/${product.documentId}/${product.name.replaceAll(
            " ",
            "-"
          )}`
        )
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{ height: "100%", cursor: 'pointer' }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            borderRadius: "2px",
            overflow: "hidden",
            cursor: 'pointer',
            "&:hover": {
              "& .product-info": {
                transform: { xs: "none", sm: "translateY(0)" }
              }
            }
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: { xs: "60%", sm: "65%", md: "70%" },
              width: "100%",
              overflow: "hidden",
              "&:hover button": {
                opacity: { xs: "0", sm: "1" },
                visibility: { xs: "hidden", sm: "visible" },
              },
            }}
          >
            <img
              src={import.meta.env.VITE_FILE_URL + product?.images[0]?.url}
              alt={product?.name}
              style={{ 
                width: "100%", 
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: { xs: "none", sm: "scale(1.05)" }
                }
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: { xs: "12px", sm: "16px", md: "20px" },
                top: { xs: "12px", sm: "16px", md: "20px" },
                fontWeight: "bold",
                backgroundColor: "white",
                px: { xs: "5px", sm: "6px", md: "7px" },
                py: { xs: "1px", sm: "2px", md: "3px" },
                borderRadius: "4px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
              }}
            >
              New
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                left: { xs: "12px", sm: "16px", md: "20px" },
                top: { xs: "36px", sm: "44px", md: "50px" },
                fontWeight: "bold",
                px: { xs: "4px", sm: "5px", md: "5px" },
                py: { xs: "1px", sm: "2px", md: "3px" },
                borderRadius: "4px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                color: "white",
                backgroundColor: "#38CB89",
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
              }}
            >
              -{product?.offer}%
            </Typography>
            <FavoriteBorderIcon
              sx={{
                position: "absolute",
                right: { xs: "12px", sm: "16px", md: "20px" },
                top: { xs: "12px", sm: "16px", md: "20px" },
                px: { xs: "4px", sm: "5px", md: "5px" },
                borderRadius: "50%",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                color: "black",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
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
                top: { xs: "65%", sm: "70%", md: "75%" },
                left: "50%",
                transform: "translateX(-50%)",
                px: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                py: { xs: "6px", sm: "8px", md: "10px" },
                whiteSpace: "nowrap",
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                opacity: { xs: "0", sm: "0" },
                visibility: { xs: "hidden", sm: "hidden" },
                transition: "all .5s",
                minWidth: { xs: "120px", sm: "140px", md: "160px" },
                "&:hover": {
                  backgroundColor: "#333",
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(
                  `/product-details/${
                    product.documentId
                  }/${product.name.replaceAll(" ", "-")}`
                );
              }}
            >
              More Information
            </Button>
          </Box>
          <Box 
            className="product-info"
            sx={{
              mt: { xs: "12px", sm: "16px", md: "20px" },
              p: { xs: "8px", sm: "12px", md: "0" },
              transition: "transform 0.3s ease",
              transform: { xs: "translateY(0)", sm: "translateY(0)" }
            }}
          >
            <Rating
              sx={{
                color: "black",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                marginBottom: { xs: "3px", sm: "4px", md: "5px" },
              }}
              name="text-feedback"
              value={product?.star}
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
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: 1.3,
                height: { xs: "40px", sm: "auto" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.name.split(" ").slice(0, 3).join(" ")}
            </Typography>
            <Box 
              display={"flex"} 
              gap={{ xs: "12px", sm: "16px", md: "20px" }} 
              sx={{ 
                marginBottom: { xs: "3px", sm: "4px", md: "5px" },
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" }
                }}
              >
                ${product.price - (product.price * product.offer) / 100}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "line-through !important",
                  opacity: "0.5",
                  fontSize: { xs: "13px", sm: "14px", md: "15px" }
                }}
              >
                ${product.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Atropos>
  );
}