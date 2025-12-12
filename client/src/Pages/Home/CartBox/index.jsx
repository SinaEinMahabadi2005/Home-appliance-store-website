import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { motion } from "framer-motion";

export default function CartBox() {
  // انیمیشن ورود برای هر باکس
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
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: "48px" }} />,
      title: "Free Shipping",
      desc: "Order above $200",
    },
    {
      icon: <LocalAtmOutlinedIcon sx={{ fontSize: "48px" }} />,
      title: "Money-back",
      desc: "30 days guarantee",
    },
    {
      icon: <LockOutlinedIcon sx={{ fontSize: "48px" }} />,
      title: "Secure Payments",
      desc: "Secured by Stripe",
    },
    {
      icon: <LocalPhoneOutlinedIcon sx={{ fontSize: "48px" }} />,
      title: "24/7 Support",
      desc: "Phone and Email support",
    },
  ];

  return (
    <Stack
      sx={{ height: "40vh", width: "100%", flexDirection: "row", gap: "32px",px: "132px", }}
    >
      {boxes.map((box, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={boxVariants}
          style={{ width: "23%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              backgroundColor: "#F3F5F7 !important",
              height: "70%",
              borderRadius: "8px",
              alignItems: "start",
              justifyContent: "center",
              padding: "48px",
              
            }}
          >
            {box.icon}
            <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
              {box.title}
            </Typography>
            <Typography sx={{ opacity: "0.7" }}>{box.desc}</Typography>
          </Box>
        </motion.div>
      ))}
    </Stack>
  );
}