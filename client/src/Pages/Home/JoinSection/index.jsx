import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function JoinSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/static5.png)",
        height: "50vh",
        width: "100% !important",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h2" component={"h2"} fontWeight={"bold"}>
        Join Our Newsletter
      </Typography>
      <Typography>Sign up for deals, new products and promotions</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          transform: "translateX(40px)",
        }}
      >
        <EmailOutlinedIcon
          sx={{ transform: "translate(0px,9px)", opacity: "0.5" }}
        />
        <TextField
          id="standard-basic"
          label="Email address"
          variant="standard"
          sx={{ width: "70%" }}
        />
        <Typography
          variant="h6"
          sx={{ opacity: "0.5", transform: "translate(-70px,7px)" }}
        >
          Sign up
        </Typography>
      </Box>
    </Box>
  );
}
