import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";

export default function Articles() {
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
      img: "/images/static2.png",
      title: "7 ways to decor your home",
    },
    {
      img: "/images/static3.png",
      title: "Kitchen organization",
    },
    {
      img: "/images/static4.png",
      title: "Decor your bedroom",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        marginTop: "64px",
        marginBottom: "64px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} component={"h3"} variant="h4">
          Articles
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid black",
          }}
          onClick={() => navigate(`/products`)}
        >
          More Articles
          <ArrowForwardIcon />
        </Typography>
      </Box>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          width: "100%",
          gap: "32px",
        }}
      >
        {articles.map((article, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            style={{ width: "30%", height: "100%" }}
          >
            <Atropos
              className="my-atropos"
              activeOffset={40}
              rotateXMax={20}
              rotateYMax={20}
              shadow={false}
              style={{ height: "100%" }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <img
                  src={article.img}
                  alt="articles"
                  style={{ height: "80%", width: "100%" }}
                />
                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                  {article.title}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  Read More
                  <ArrowRightAltOutlinedIcon sx={{ fontSize: "24px" }} />
                </Typography>
              </Box>
            </Atropos>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}