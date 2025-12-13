import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import notify from "../../../Utils/notify";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slice/AuthSlice";

export default function LoginForm({ handlePageTypeChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      const data = await response.json();
      if (data.jwt) {
        notify("success", "Login successful! Welcome back");
        dispatch(login(data));
        localStorage.setItem("jwt",data.jwt)
      } else {
        notify("error", "Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Box
      onSubmit={handleSubmit}
      component={"form"}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        gap: { xs: "16px", sm: "20px", md: "24px" },
        flexDirection: "column",
        pr: { xs: "16px", sm: "32px", md: "96px", lg: "164px", xl: "232px" },
        pl: { xs: "16px", sm: "24px", md: "48px", lg: "96px", xl: "132px" },
        mt: { xs: "32px", sm: "48px", md: "64px" },
        pt: { xs: "16px", sm: "24px", md: "32px" },
        pb: { xs: "32px", sm: "48px", md: "64px" },
        width: "100%",
        minHeight: { xs: "calc(100vh - 100px)", sm: "auto" },
        maxWidth: { xs: "100%", sm: "600px", md: "800px", lg: "100%" },
        mx: { xs: "auto", md: "0" },
      }}
    >
      <Typography variant="h4" sx={{ 
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.5rem" },
        fontWeight: "bold",
      }}>
        Sign in
      </Typography>
      
      <Typography color="gray" fontWeight={"bold"} sx={{ 
        fontSize: { xs: "14px", sm: "15px", md: "16px" },
        lineHeight: 1.5,
      }}>
        Don't have an account?
        <span
          style={{ color: "#38CB89", cursor: "pointer" }}
          onClick={() => handlePageTypeChange("register")}
        >
          {" "}
          Sign up
        </span>
      </Typography>

      <TextField
        sx={{ 
          width: "100%",
          "& .MuiInputLabel-root": {
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
          },
          "& .MuiInputBase-input": {
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
          },
        }}
        id="email"
        label="Email address"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      
      <TextField
        sx={{ 
          width: "100%",
          "& .MuiInputLabel-root": {
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
          },
          "& .MuiInputBase-input": {
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
          },
        }}
        id="password"
        label="Password"
        variant="standard"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      
      <Typography
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", sm: "center" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: "8px", sm: "10px" },
          fontWeight: "bold",
          color: "gray",
          fontSize: { xs: "13px", sm: "14px", md: "15px" },
          lineHeight: 1.4,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            name="remember"
            style={{ 
              height: { xs: "20px", sm: "24px", md: "32px" },
              width: { xs: "20px", sm: "24px", md: "32px" },
            }}
          />
          I agree with
        </Box>
        <Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          <span style={{ color: "black", cursor: "pointer" }}>Privacy Policy</span>
          and
          <span style={{ color: "black", cursor: "pointer" }}>Terms of Use</span>
        </Box>
      </Typography>
      
      <Button
        type="submit"
        sx={{
          width: "100%",
          height: { xs: "48px", sm: "52px", md: "56px" },
          backgroundColor: "#141718",
          color: "white",
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#000",
          },
          mt: { xs: "16px", sm: "24px" },
        }}
      >
        Sign in
      </Button>
    </Box>
  );
}