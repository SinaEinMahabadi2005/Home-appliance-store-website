import { useState } from "react";
import LoginForm from "./Login";
import Register from "./Register";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const { token } = useSelector(state => state.auth);
  const [pageType, setPageType] = useState("register");
  
  const handlePageTypeChange = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };
  
  if (token) {
    return <Navigate to='/profile'/>
  }
  
  return (
    <Box 
      display={"flex"} 
      flexDirection={{ xs: "column", md: "row" }}
      height={{ xs: "100vh", sm: "100vh", md: "100vh" }}
      minHeight={{ xs: "100vh", sm: "100vh", md: "100vh" }}
      maxHeight={{ xs: "100vh", sm: "100vh", md: "100vh" }}
      sx={{ 
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
      <Box
        flex={{ xs: "0 0 40%", sm: "0 0 40%", md: "0 0 50%" }}
        sx={{
          backgroundImage: "url(/images/static7.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: { xs: "250px", sm: "300px", md: "auto" },
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ 
            fontWeight: "bold", 
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            color: "white",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            px: 2,
          }}
        >
          3legant.
        </Typography>
      </Box>
      
      {/* Form Section */}
      <Box 
        flex={{ xs: "1 1 auto", sm: "1 1 auto", md: "0 0 50%" }}
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: { xs: "flex-start", sm: "center", md: "flex-start" },
          justifyContent: { xs: "flex-start", sm: "center", md: "flex-start" },
          overflowY: "auto",
          overflowX: "hidden",
          py: { xs: 2, sm: 3, md: 0 },
          px: { xs: 0, sm: 0, md: 0 },
          minHeight: { xs: "60vh", sm: "60vh", md: "auto" },
        }}
      >
        <Box sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "center", md: "flex-start" },
          alignItems: "center",
        }}>
          {pageType === "login" ? (
            <Box sx={{ 
              width: "100%", 
              maxWidth: { xs: "90%", sm: "80%", md: "100%" },
              height: "100%",
            }}>
              <LoginForm handlePageTypeChange={handlePageTypeChange} />
            </Box>
          ) : (
            <Box sx={{ 
              width: "100%", 
              maxWidth: { xs: "90%", sm: "80%", md: "100%" },
              height: "100%",
            }}>
              <Register handlePageTypeChange={handlePageTypeChange} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}