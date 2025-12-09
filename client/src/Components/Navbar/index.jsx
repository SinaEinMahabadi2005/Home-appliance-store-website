import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const navigate = useNavigate();
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "32px",
        py: "12px",
      }}
    >
      <Typography component={"h1"} variant="h4" sx={{ fontWeight: "bold" }}>
        3legant
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link
          sx={{
            color: "black",
            fontWeight: "bold",
            transition: "all .5s",
            p: "3px",
            borderRadius: "10px",
            "&:hover": {
              boxShadow: " 0 0 10px 10px rgba(220, 104, 16, 0.3)",
            },
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          sx={{
            color: "black",
            opacity : '0.7' ,
            transition: "all .5s",
            p: "3px",
            borderRadius: "10px",
            "&:hover": {
              boxShadow: " 0 0 10px 10px rgba(220, 104, 16, 0.3)",
            },
          }}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          sx={{
            color: "black",
            opacity: "0.7",
            transition: "all .5s",
            p: "3px",
            borderRadius: "10px",
            "&:hover": {
              boxShadow: " 0 0 10px 10px rgba(220, 104, 16, 0.3)",
            },
          }}
          href="/product"
        >
          Product
        </Link>
        <Link
          sx={{
            color: "black",
            opacity: "0.7",
            transition: "all .5s",
            p: "3px",
            borderRadius: "10px",
            "&:hover": {
              boxShadow: " 0 0 10px 10px rgba(220, 104, 16, 0.3)",
            },
          }}
          href="/about"
        >
          Contact Us
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"24px"}
      >
        <SearchIcon sx={{ cursor: "pointer" }} />
        <Link
          href="/auth"
          sx={{ color: "black", transform: "translateY(3px)" }}
        >
          <AccountCircleIcon />
        </Link>

        <Badge
          badgeContent={cartLength}
          onClick={() => navigate("/cart")}
          sx={{ cursor: "pointer" }}
        >
          <LocalMallIcon />
        </Badge>
      </Box>
    </Box>
  );
}
