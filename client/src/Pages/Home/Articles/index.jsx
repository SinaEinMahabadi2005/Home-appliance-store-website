import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { useNavigate } from "react-router-dom";

export default function Articles() {
  const navigate = useNavigate();
  
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const articles = [
    {
      id: 1,
      image: "/images/static2.png",
      title: "7 ways to decor your home",
    },
    {
      id: 2,
      image: "/images/static3.png",
      title: "Kitchen organization",
    },
    {
      id: 3,
      image: "/images/static4.png",
      title: "Decor your bedroom",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
        marginTop: { xs: "32px", sm: "48px", md: "64px" },
        marginBottom: { xs: "32px", sm: "48px", md: "64px" },
        px: { xs: "16px", sm: "24px", md: "48px", lg: "64px", xl: "132px" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: "16px", sm: "0" },
          width: "100%",
        }}
      >
        <Typography 
          sx={{ 
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.5rem" },
            lineHeight: 1.2,
          }} 
          component={"h3"} 
          variant="h4"
        >
          Articles
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid black",
            fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
            whiteSpace: "nowrap",
            "&:hover": {
              borderBottom: "2px solid black",
            },
            transition: "border-bottom 0.3s ease",
          }}
          onClick={() => navigate(`/products`)}
        >
          More Articles
          <ArrowForwardIcon sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, ml: 0.5 }} />
        </Typography>
      </Box>

      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", sm: "70vh", md: "60vh" },
          minHeight: { xs: "auto", sm: "500px" },
          width: "100%",
          gap: { xs: "24px", sm: "28px", md: "32px" },
        }}
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            style={{ 
              width: { xs: "100%", sm: "48%", md: "30%" } 
            }}
          >
            <Atropos
              className="my-atropos"
              activeOffset={40}
              rotateXMax={20}
              rotateYMax={20}
              shadow={false}
              style={{ width: "100%", height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "12px", sm: "14px", md: "16px" },
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box sx={{ 
                  width: "100%", 
                  height: { xs: "200px", sm: "250px", md: "80%" },
                  overflow: "hidden",
                  borderRadius: "8px",
                }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
                
                <Typography sx={{ 
                  fontWeight: "bold", 
                  fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
                  lineHeight: 1.2,
                  mt: { xs: 1, sm: 0 },
                }}>
                  {article.title}
                </Typography>
                
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "4px", sm: "6px", md: "8px" },
                    cursor: "pointer",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    "&:hover": {
                      opacity: 0.8,
                    },
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Read More
                  <ArrowRightAltOutlinedIcon sx={{ 
                    fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" } 
                  }} />
                </Typography>
              </Box>
            </Atropos>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}