import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
export default function Hundreds() {
  return (
    <Stack
      sx={{ height: "60vh", width: "100%", flexDirection: "row", mb: "40px" }}
    >
      <img
        src="/images/static1.png"
        alt=""
        style={{ height: "100%", width: "50%" }}
      />
      <Box sx={{ height: "100%", width: "50%", backgroundColor: "#F3F5F7" ,display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start' , gap:'32px',px:'60px' }}>
        <Typography sx={{fontSize:'16px' , fontWeight:'bold', color:'#377DFF'}}>SALE UP TO 35% OFF</Typography>
        <Typography sx={{
            fontSize:'40px',
            fontWeight:'bold',
            lineHeight:'48px'
        }}>HUNDREDS of <br/> New lower prices!</Typography>
        <Typography fontSize={'22px'}>
          It’s more affordable than ever to give every <br/> room in your home a
          stylish makeover
        </Typography>
        <Typography sx={{borderBottom:'1px solid black' ,display:'flex', alignItems:'center', gap:'8px',cursor:'pointer'}}>Shop Now<ArrowRightAltOutlinedIcon sx={{fontSize:'24px'}} /></Typography>
      </Box>
    </Stack>
  );
}
