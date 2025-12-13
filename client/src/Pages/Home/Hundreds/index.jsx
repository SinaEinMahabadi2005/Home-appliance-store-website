import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export default function Hundreds() {
  return (
    <Stack
      sx={{ 
        height: { xs: "auto", sm: "70vh", md: "60vh" },
        minHeight: { xs: "500px", sm: "400px", md: "auto" },
        width: "100%", 
        flexDirection: { xs: "column", sm: "row" }, 
        mb: { xs: "24px", sm: "32px", md: "40px" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ 
        height: { xs: "250px", sm: "100%" }, 
        width: { xs: "100%", sm: "50%" },
        position: "relative",
        overflow: "hidden",
      }}>
        <img
          src="/images/static1.png"
          alt="Sale promotion"
          style={{ 
            height: "100%", 
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      
      <Box sx={{ 
        height: { xs: "auto", sm: "100%" }, 
        width: { xs: "100%", sm: "50%" }, 
        backgroundColor: "#F3F57", 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: { xs: "center", sm: "start" }, 
        gap: { xs: "16px", sm: "24px", md: "32px" },
        px: { xs: "16px", sm: "32px", md: "48px", lg: "60px" },
        py: { xs: "32px", sm: "40px", md: "48px" },
        textAlign: { xs: "center", sm: "left" },
      }}>
        <Typography sx={{
          fontSize: { xs: "14px", sm: "15px", md: "16px" }, 
          fontWeight: 'bold', 
          color: '#377DFF'
        }}>
          SALE UP TO 35% OFF
        </Typography>
        
        <Typography sx={{
          fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
          fontWeight: 'bold',
          lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" }
        }}>
          HUNDREDS of <br/> New lower prices!
        </Typography>
        
        <Typography fontSize={{
          xs: "16px", 
          sm: "18px", 
          md: "20px", 
          lg: "22px"
        }}>
          It's more affordable than ever to give every <br/> room in your home a
          stylish makeover
        </Typography>
        
        <Typography sx={{
          borderBottom: '1px solid black',
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: "4px", sm: "6px", md: "8px" },
          cursor: 'pointer',
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          py: "4px",
          "&:hover": {
            borderBottom: '2px solid black',
          },
          transition: "border-bottom 0.3s ease",
        }}>
          Shop Now
          <ArrowRightAltOutlinedIcon sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" } }} />
        </Typography>
      </Box>
    </Stack>
  );
}