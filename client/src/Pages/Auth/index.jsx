import { useState } from "react";
import LoginForm from "./Login";
import Register from "./Register";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const {token}=useSelector(state=>state.auth)
  const [pageType, setPageType] = useState("register");
  const handlePageTypeChange = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };
  if(token){
    return <Navigate to='/profile'/>
  }
  return (
    <Box display={"flex"} height={"100vh"} sx={{ width: "100%" }}>
      <Box
        height={"100%"}
        width={"50%"}
        sx={{
          backgroundImage: "url(/images/static7.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", mt: "10px", textAlign: "center" }}
        >
          3legant.
        </Typography>
      </Box>
      <Box width={"50%"} height={'100%'}>
        {pageType === "login" ? (
          <LoginForm handlePageTypeChange={handlePageTypeChange} />
        ) : (
          <Register handlePageTypeChange={handlePageTypeChange} />
        )}
      </Box>
    </Box>
  );
}
