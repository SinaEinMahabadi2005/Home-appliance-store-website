import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { motion } from "framer-motion";

export default function CartBox() {
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const boxes = [
    {
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Free Shipping",
      desc: "Order above $200",
    },
    {
      icon: <LocalAtmOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Money-back",
      desc: "30 days guarantee",
    },
    {
      icon: <LockOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Secure Payments",
      desc: "Secured by Stripe",
    },
    {
      icon: <LocalPhoneOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "24/7 Support",
      desc: "Phone and Email support",
    },
  ];

  return (
    <Stack
      sx={{ 
        height: { xs: "auto", sm: "50vh", md: "40vh" },
        width: "100%", 
        flexDirection: { xs: "column", sm: "row" }, 
        gap: { xs: "16px", sm: "24px", md: "32px" },
        px: { xs: "16px", sm: "24px", md: "48px", lg: "64px", xl: "132px" },
        py: { xs: "32px", sm: "40px", md: "48px" },
      }}
    >
      {boxes.map((box, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={boxVariants}
          style={{ 
            width: { xs: "100%", sm: "48%", md: "23%" } 
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              gap: { xs: "16px", sm: "20px", md: "24px", lg: "32px" },
              backgroundColor: "#F3F5F7 !important",
              height: { xs: "auto", sm: "100%" },
              minHeight: { xs: "120px", sm: "200px", md: "70%" },
              borderRadius: "8px",
              alignItems: { xs: "center", sm: "start" },
              justifyContent: { xs: "flex-start", sm: "center" },
              padding: { xs: "16px", sm: "24px", md: "32px", lg: "48px" },
              width: "100%",
              textAlign: { xs: "left", sm: "left" },
            }}
          >
            {box.icon}
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: { xs: "4px", sm: "8px", md: "12px" },
              flex: 1,
            }}>
              <Typography sx={{ 
                fontSize: { xs: "18px", sm: "22px", md: "26px", lg: "28px" }, 
                fontWeight: "bold",
                lineHeight: 1.2,
              }}>
                {box.title}
              </Typography>
              <Typography sx={{ 
                opacity: "0.7", 
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: 1.4,
              }}>
                {box.desc}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Stack>
  );
}