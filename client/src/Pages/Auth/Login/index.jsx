import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
        gap: "24px",
        flexDirection: "column",
        pr: "232px",
        pl: "132px",
        mt: "64px",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="h4">Sign in</Typography>
      <Typography color="gray" fontWeight={"bold"}>
        Don't have an account?
        <span
          style={{ color: "#38CB89", cursor: "pointer" }}
          onClick={() => handlePageTypeChange("register")}
        >
          {" "}
          Sign in
        </span>
      </Typography>

      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Email address"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        <input
          type="checkbox"
          name="remember"
          id=""
          style={{ height: "32px" }}
        />
        I agree with <span style={{ color: "black" }}>Privacy Policy</span> and{" "}
        <span style={{ color: "black" }}>Terms of Use</span>
      </Typography>
      <Button
        type="submit"
        sx={{
          width: "100%",
          height: "5%",
          backgroundColor: "#141718",
          color: "white",
        }}
      >
        Sign in
      </Button>
    </Box>
  );
}
