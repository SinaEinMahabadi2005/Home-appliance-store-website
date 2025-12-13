import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      component={"footer"}
      sx={{
        px: { 
          xs: "16px", 
          sm: "24px", 
          md: "48px", 
          lg: "96px", 
          xl: "132px" 
        },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#141718",
        justifyContent: "center",
        alignItems: "center",
        height: { 
          xs: "auto", 
          sm: "40vh", 
          md: "35vh", 
          lg: "30vh" 
        },
        minHeight: { xs: "400px", sm: "350px", md: "300px" },
        width: '100%',
        py: { xs: "32px", sm: "40px", md: "48px" },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          width: '100%',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          pb: { xs: "24px", sm: "32px", md: "48px" },
          gap: { xs: "24px", sm: "32px", md: "0px" },
        }}
      >
        {/* Brand Section */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "12px", sm: "16px", md: "24px", lg: "32px" }, 
          alignItems: { xs: "flex-start", sm: "center" },
          width: { xs: "100%", md: "auto" }
        }}>
          <Typography 
            color="white" 
            fontSize={{ xs: "24px", sm: "28px", md: "30px", lg: "32px" }} 
            fontWeight={'bold'}
            sx={{ lineHeight: 1 }}
          >
            3legant.
          </Typography>
          <Typography 
            color="white" 
            sx={{ 
              display: { xs: "none", sm: "block" },
              opacity: 0.5 
            }}
          >
            |
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ opacity: 0.8 }}
          >
            Gift & Decoration Store
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "12px", sm: "16px", md: "20px", lg: "32px" }, 
          alignItems: { xs: "flex-start", sm: "center" },
          flexWrap: "wrap",
          width: { xs: "100%", md: "auto" }
        }}>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Home
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Shop
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Product
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Blog
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      
      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          width: '100%',
          pt: { xs: "24px", sm: "28px", md: "32px", lg: "24px" },
          gap: { xs: "24px", sm: "16px", md: "0px" },
        }}
      >
        {/* Copyright & Policies */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "12px", sm: "16px", md: "24px", lg: "32px" }, 
          alignItems: { xs: "flex-start", sm: "center" },
          flexWrap: "wrap",
          width: { xs: "100%", sm: "auto" }
        }}>
          <Typography 
            color="white" 
            fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
            sx={{ opacity: 0.7 }}
          >
            Copyright © 2023 3legant. All rights reserved
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Privacy Policy
          </Typography>
          <Typography 
            color="white" 
            fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
            sx={{ 
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          >
            Terms of Use
          </Typography>
        </Box>

        {/* Social Icons */}
        <Box sx={{ 
          display: "flex", 
          gap: { xs: "20px", sm: "24px", md: "28px", lg: "32px" }, 
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "flex-start", sm: "center" }
        }}>
          <InstagramIcon 
            sx={{
              color: 'white',
              fontSize: { xs: "24px", sm: "26px", md: "28px" },
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          />
          <FacebookIcon 
            sx={{
              color: 'white',
              fontSize: { xs: "24px", sm: "26px", md: "28px" },
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          />
          <YouTubeIcon 
            sx={{
              color: 'white',
              fontSize: { xs: "24px", sm: "26px", md: "28px" },
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.3s"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}