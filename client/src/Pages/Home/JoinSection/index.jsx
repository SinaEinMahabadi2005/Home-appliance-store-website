import { Box, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function JoinSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        backgroundImage: "url(/images/static5.png)",
        height: {
          xs: "40vh",    // Mobile
          sm: "45vh",    // Small tablet
          md: "50vh",    // Tablet
          lg: "50vh",    // Desktop
        },
        width: "100% !important",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: {
          xs: 1,    // Mobile
          sm: 1.5,  // Tablet
          md: 2,    // Desktop
        },
        px: {
          xs: 2,    // Mobile
          sm: 3,    // Tablet
          md: 4,    // Desktop
          lg: 0,    // Large desktop - no horizontal padding
        },
        textAlign: "center",
      }}
    >
      <Typography 
        variant="h2" 
        component={"h2"} 
        fontWeight={"bold"}
        sx={{
          fontSize: {
            xs: "1.75rem",  // ~28px Mobile
            sm: "2.25rem",  // ~36px Tablet
            md: "2.5rem",   // ~40px Desktop
            lg: "3rem",     // ~48px Large desktop
          },
          lineHeight: {
            xs: 1.2,
            sm: 1.3,
            md: 1.4,
          },
          mb: {
            xs: 0.5,
            sm: 1,
            md: 1,
          },
        }}
      >
        Join Our Newsletter
      </Typography>
      
      <Typography
        sx={{
          fontSize: {
            xs: "0.875rem",  // 14px Mobile
            sm: "1rem",      // 16px Tablet
            md: "1rem",      // 16px Desktop
          },
          opacity: 0.8,
          mb: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },
          maxWidth: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
          },
          lineHeight: 1.6,
        }}
      >
        Sign up for deals, new products and promotions
      </Typography>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "100%",    // Full width on mobile
            sm: "90%",     // 90% on tablet
            md: "80%",     // 80% on desktop
            lg: "40%",     // Original 40% on large screens
          },
          maxWidth: "600px", // Maximum width constraint
          position: "relative",
        }}
      >
        <EmailOutlinedIcon
          sx={{
            position: "absolute",
            left: {
              xs: "12px",
              sm: "16px",
              md: "20px",
            },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.5,
            zIndex: 1,
            fontSize: {
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.5rem",
            },
          }}
        />
        
        <TextField
          id="standard-basic"
          label="Email address"
          variant="standard"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              pl: {
                xs: "40px",   // Space for icon
                sm: "48px",
                md: "52px",
              },
              pr: {
                xs: "70px",   // Space for "Sign up" text
                sm: "80px",
                md: "90px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
              left: {
                xs: "40px",
                sm: "48px",
                md: "52px",
              },
            },
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
              paddingTop: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
              paddingBottom: {
                xs: "8px",
                sm: "10px",
                md: "12px",
              },
            },
          }}
        />
        
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            right: {
              xs: "12px",
              sm: "16px",
              md: "20px",
            },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.5,
            cursor: "pointer",
            fontSize: {
              xs: "0.875rem",  // 14px
              sm: "1rem",      // 16px
              md: "1.125rem",  // 18px
            },
            fontWeight: {
              xs: 500,
              sm: 500,
              md: 600,
            },
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          Sign up
        </Typography>
      </Box>
    </Box>
  );
}