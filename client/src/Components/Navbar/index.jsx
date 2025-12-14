import { Box, Link, Typography, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: "/", label: "Home", bold: true },
    // { to: "/profile", label: "Profile", bold: false },
    { to: "/products/all/all-category", label: "Product", bold: false },
    { to: "/about", label: "Contact Us", bold: false },
  ];

  const linkStyles = (bold = false) => ({
    color: "black",
    opacity: bold ? 1 : 0.7,
    fontWeight: bold ? "bold" : "normal",
    transition: "all .5s",
    p: "3px",
    borderRadius: "10px",
    borderBottom: "3px solid transparent",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "3px solid black",
    },
  });

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography component={"h1"} variant="h5" sx={{ fontWeight: "bold" }}>
          3legant
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navLinks.map((link) => (
          <ListItem key={link.to} sx={{ px: 0 }}>
            <Link
              component={RouterLink}
              to={link.to}
              sx={linkStyles(link.bold)}
              onClick={handleDrawerToggle}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          py: 2,
          borderTop: "1px solid #eee",
        }}
      >
        <SearchIcon sx={{ cursor: "pointer" }} />
        <Link
          component={RouterLink}
          to="/auth"
          sx={{ color: "black", transform: "translateY(3px)" }}
          onClick={handleDrawerToggle}
        >
          <AccountCircleIcon />
        </Link>
        <Badge
          badgeContent={cartLength}
          onClick={() => {
            navigate("/cart");
            handleDrawerToggle();
          }}
          sx={{ cursor: "pointer" }}
        >
          <LocalMallIcon />
        </Badge>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        component={"nav"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "12px",
          px: {
            xs: "16px",
            sm: "24px",
            md: "48px",
            lg: "132px",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            component={"h1"}
            variant={isMobile ? "h5" : isTablet ? "h4" : "h4"}
            sx={{ fontWeight: "bold" }}
          >
            3legant
            
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: {
                xs: "12px",
                sm: "16px",
                md: "20px",
                lg: "24px",
              },
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                component={RouterLink}
                to={link.to}
                sx={linkStyles(link.bold)}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        )}

        {/* Desktop Icons */}
        {!isMobile && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{
              xs: "12px",
              sm: "16px",
              md: "20px",
              lg: "24px",
            }}
          >
            <SearchIcon sx={{ cursor: "pointer" }} />
            <Link
              component={RouterLink}
              to="/auth"
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
        )}

        {/* Mobile Icons - Only icons, no nav links */}
        {isMobile && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"16px"}
          >
            <SearchIcon sx={{ cursor: "pointer", fontSize: "1.2rem" }} />
            <Link
              component={RouterLink}
              to="/auth"
              sx={{ color: "black", transform: "translateY(3px)" }}
            >
              <AccountCircleIcon sx={{ fontSize: "1.2rem" }} />
            </Link>
            <Badge
              badgeContent={cartLength}
              onClick={() => navigate("/cart")}
              sx={{ cursor: "pointer" }}
            >
              <LocalMallIcon sx={{ fontSize: "1.2rem" }} />
            </Badge>
          </Box>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}