import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("categories?populate=*");
      setCategories(response?.data);
    })();
  }, []);
  
  const items = categories?.map((category) => (
    <CategoryCard key={category?.documentId} category={category} />
  ));
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "16px", sm: "24px", md: "32px" },
        height: { xs: "auto", sm: "60vh", md: "70vh", lg: "80vh" },
        minHeight: { xs: "600px", sm: "500px", md: "auto" },
        width: "100%",
        px: { xs: "16px", sm: "24px", md: "48px", lg: "64px", xl: "132px" },
        py: { xs: "32px", sm: "40px", md: "48px" },
      }}
    >
      <Box sx={{ 
        height: { xs: "250px", sm: "300px", md: "100%" }, 
        width: { xs: "100%", md: "50%" } 
      }}>
        {items[2]}
      </Box>
      
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "column" }, 
        gap: { xs: "16px", sm: "24px", md: "32px" },
        height: { xs: "500px", sm: "600px", md: "100%" }, 
        width: { xs: "100%", md: "50%" } 
      }}>
        <Box sx={{ 
          height: { xs: "250px", sm: "300px", md: "48%" }, 
          width: "100%" 
        }}>
          {items[1]}
        </Box>
        <Box sx={{ 
          height: { xs: "250px", sm: "300px", md: "48%" }, 
          width: "100%" 
        }}>
          {items[0]}
        </Box>
      </Box>
    </Box>
  );
}