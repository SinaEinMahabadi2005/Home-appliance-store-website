import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import EmailOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/LockOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { motion } from "framer-motion";

export default function About() {
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
      icon: (
        <StorefrontOutlinedIcon
          sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }}
        />
      ),
      title: "Address",
      desc: "234 Hai Trieu Ho Chi Minh City VietNam",
    },
    {
      icon: (
        <AddIcCallOutlinedIcon
          sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }}
        />
      ),
      title: "Contact Us",
      desc: "+84 234 567 890",
    },
    {
      icon: (
        <EmailOutlinedIcon
          sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }}
        />
      ),
      title: "Email",
      desc: "hello@3legant.com",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: "132px" },
        display: "flex",
        justifyContent: "start",
        py: { xs: 3, sm: 4, md: "32px" },
        alignItems: "start",
        flexDirection: "column",
        gap: { xs: 3, sm: 4, md: "32px" },
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Title Section */}
      <Typography
        fontWeight={"bold"}
        fontSize={{ xs: "32px", sm: "40px", md: "48px" }}
        lineHeight={{ xs: 1.2, sm: 1.3, md: 1.4 }}
      >
        We believe in sustainable decor. We're passionate about life at home.
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          opacity: "0.7",
          lineHeight: 1.6,
        }}
      >
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </Typography>

      {/* Hero Section with Image and About */}
      <Stack
        sx={{
          height: { xs: "auto", md: "70vh", lg: "60vh" },
          minHeight: { xs: "auto", sm: "400px", md: "500px" },
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          mb: { xs: 3, sm: 4, md: "40px" },
          overflow: "hidden",
          borderRadius: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            height: { xs: "300px", sm: "400px", md: "100%" },
            width: { xs: "100%", md: "50%" },
            position: "relative",
            overflow: "hidden",
          }}
        >
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

        <Box
          sx={{
            height: { xs: "auto", md: "100%" },
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#F3F5F7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "start" },
            gap: { xs: 2, sm: 3, md: "32px" },
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            py: { xs: 4, sm: 5, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
              fontWeight: "bold",
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
            }}
          >
            About Us
          </Typography>

          <Typography
            fontSize={{
              xs: "16px",
              sm: "18px",
              md: "20px",
              lg: "22px",
            }}
            sx={{ lineHeight: 1.6 }}
          >
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.
            <Box component="br" sx={{ display: { xs: "none", sm: "block" } }} />
            Our customer service is always prepared to support you 24/7
          </Typography>

          <Typography
            sx={{
              borderBottom: "1px solid black",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5 },
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              py: "4px",
              "&:hover": {
                borderBottom: "2px solid black",
              },
              transition: "border-bottom 0.3s ease",
            }}
          >
            Shop Now
            <ArrowRightAltOutlinedIcon
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
              }}
            />
          </Typography>
        </Box>
      </Stack>

      {/* Contact Us Title */}
      <Typography
        fontWeight={"bold"}
        fontSize={{ xs: "32px", sm: "40px", md: "48px" }}
        mx={"auto"}
        textAlign="center"
        width="100%"
      >
        Contact Us
      </Typography>

      {/* Contact Info Boxes */}
      <Stack
        sx={{
          height: { xs: "auto", md: "auto" },
          width: "100%",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          flexWrap: { sm: "wrap", md: "nowrap" },
          gap: { xs: 3, sm: 3, md: 4 },
          px: { xs: 0, sm: 2, md: 4, lg: 6, xl: 8 },
          py: { xs: 3, sm: 4, md: 6 },
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
              width: "100%",
              maxWidth: { xs: "100%", sm: "48%", md: "32%", lg: "30%" },
              flex: { xs: "1 0 100%", sm: "1 0 48%", md: "1 0 32%", lg: 1 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column" },
                gap: { xs: 2, sm: 3, md: 4 },
                backgroundColor: "#F3F5F7 !important",
                height: { xs: "auto", md: "100%" },
                minHeight: { xs: "180px", sm: "200px", md: "220px" },
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: 3, sm: 4, md: 4, lg: 5 },
                width: "100%",
                textAlign: "center",
              }}
            >
              {box.icon}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1, sm: 1.5 },
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      lg: "26px",
                    },
                    fontWeight: "bold",
                    lineHeight: 1.2,
                  }}
                >
                  {box.title}
                </Typography>
                <Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    lineHeight: 1.4,
                    wordBreak: "break-word",
                  }}
                >
                  {box.desc}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Stack>

      {/* Contact Form Section */}
      <Stack
        gap={{ xs: 3, md: "32px" }}
        width={"100%"}
        height={{ xs: "auto", md: "50vh" }}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ mb: { xs: 4, md: 0 } }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: { xs: 2, md: "20px" },
            width: { xs: "100%", md: "45%" },
            height: { xs: "auto", md: "100%" },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography sx={{ opacity: "0.7", fontWeight: "bold" }}>
            FULL NAME
          </Typography>
          <TextField sx={{ width: "100%" }} label="Your Name" size="small" />
          <Typography sx={{ opacity: "0.7", fontWeight: "bold" }}>
            Email address
          </Typography>
          <TextField sx={{ width: "100%" }} label="Your Email" size="small" />
          <Typography sx={{ opacity: "0.7", fontWeight: "bold" }}>
            Message
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            label="Your message"
            multiline
            rows={4}
            size="small"
          />
          <Button
            sx={{
              backgroundColor: "#141718",
              width: { xs: "100%", sm: "50%", md: "30%" },
              color: "white",
              fontWeight: "bold",
              py: 1.5,
              mt: 1,
            }}
          >
            Send Message
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: { xs: "300px", sm: "400px", md: "100%" },
            order: { xs: 1, md: 2 },
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <img
            src="/images/static8.png"
            alt="Map"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}