import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        px: "132px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#141718",
        justifyContent: "center",
        alignItems: "center",
        height:'30vh' ,
        width:'100%',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width:'100%' ,
          borderBottom:'1px solid gray',
          pb:'48px'
        }}
      >
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Typography color="white" fontSize={'32px'} fontWeight={'bold'}>3legant.</Typography>
          <Typography color="white">|</Typography>
          <Typography color="white">Gift & Decoration Store</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Typography color="white">Home</Typography>
          <Typography color="white">Shop</Typography>
          <Typography color="white">Product</Typography>
          <Typography color="white">Blog</Typography>
          <Typography color="white">Contact Us</Typography>
        </Box>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width:'100%' ,
          pt:'24px'
        }}
      >
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Typography color="white" >Copyright © 2023 3legant. All rights reserved</Typography>
          <Typography color="white">Privacy Policy</Typography>
          <Typography color="white">Terms of Use</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <InstagramIcon sx={{color:'white'}}/>
          <FacebookIcon sx={{color:'white'}}/>
          <YouTubeIcon sx={{color:'white'}}/>
        </Box>
      </Box>
     
    </Box>
  );
}
