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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        marginTop: "64px",
        marginBottom: "64px",
        px: "132px",
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
        <motion.div
          custom={0}
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
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="/images/static2.png"
                alt="articles"
                style={{ height: "80%", width: "100%" }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                7 ways to decor your home
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

        <motion.div
          custom={1}
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
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="/images/static3.png"
                alt="articles"
                style={{ height: "80%", width: "100%" }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                Kitchen organization
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

        <motion.div
          custom={2}
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
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="/images/static4.png"
                alt="articles"
                style={{ height: "80%", width: "100%" }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                Decor your bedroom
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
      </Stack>
    </Box>
  );
}
