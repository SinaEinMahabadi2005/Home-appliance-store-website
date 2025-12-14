import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
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
      icon: <StorefrontOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Address",
      desc: '234 Hai Trieu Ho Chi Minh City VietNam',
    },
    {
      icon: <AddIcCallOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Contact Us",
      desc: "+84 234 567 890",
    },
    {
      icon: <EmailOutlinedIcon sx={{ fontSize: { xs: "32px", sm: "40px", md: "48px" } }} />,
      title: "Email",
      desc: "hello@3legant.com",
    },
  ];
  return (
    <Box
      sx={{
        px: "132px",
        display: "flex",
        justifyContent: "start",
        py: "32px",
        alignItems: "Strat",
        flexDirection:'column',
        gap:'32px'
      }}
    >
      <Typography fontWeight={"bold"} fontSize={"48px"}>
        We believe in sustainable <br /> decor. We’re passionate about <br />{" "}
        life at home.
      </Typography>
      <Typography sx={{fontSize:'20px', opacity:'0.7'}}>
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which <br/> can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, <br/> faithful to the shapes of each period, with a touch of the
        present
      </Typography>
      {/*  */}
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
        backgroundColor: "#F3F5F7", 
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
          fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
          fontWeight: 'bold',
          lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" }
        }}>
          About Us
        </Typography>
        
        <Typography fontSize={{
          xs: "16px", 
          sm: "18px", 
          md: "20px", 
          lg: "22px"
        }}>
         3legant is a gift & decorations store based in HCMC, <br/> Vietnam. Est since 2019. <br/>
Our customer service is always prepared to support you <br/> 24/7
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
    <Typography fontWeight={"bold"} fontSize={"48px"} mx={'auto'}>Contact Us</Typography>
      <Stack
          sx={{ 
            height: { xs: "auto", sm: "50vh", md: "40vh" },
            width: "100%", 
            justifyContent:'center',
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
                  alignItems: { xs: "center", sm: "center" },
                  justifyContent: { xs: "center", sm: "center" },
                  padding: { xs: "16px", sm: "24px", md: "32px", lg: "48px" },
                  width: "100%",
                  textAlign: { xs: "center", sm: "center" },
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
    </Box>
  );
}
