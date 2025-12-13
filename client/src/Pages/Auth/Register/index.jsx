import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import notify from "../../../Utils/notify";

export default function Register({ handlePageTypeChange }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
 try {
    const response=await fetch('http://localhost:1337/api/auth/local/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username,
      email,
      password
    })
  });
   const data=await response.json();
   if(data.jwt){
    notify('success','Registration successful! You can now log in.')
    handlePageTypeChange('login');
   } 
   else {
    notify('error','Register failed')
   }
   console.log(data)
 } catch (error) {
  console.log(error)
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
      <Typography variant="h4">Sing up</Typography>
      <Typography color="gray" fontWeight={"bold"}>
        Already have an account?
        <span onClick={()=>handlePageTypeChange('login')} style={{ color: "#38CB89" , cursor: "pointer" }}> Sign in</span>
      </Typography>
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Your name"
        variant="standard"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Username"
        variant="standard"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Email address"
        variant="standard"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
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
        Sign up
      </Button>
    </Box>
  );
}
