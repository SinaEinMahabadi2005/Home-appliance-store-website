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
    <CategoryCard key={category?.id} category={category} />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        height: "80vh",
        width: "100%",
      }}
    >
      <Box sx={{ height: "100%", width: "50%" }}>{items[2]}</Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" , height: "100%", width: "50%" }}>
        <Box sx={{ height: "47%", width: "100%" }}>{items[1]}</Box>
        <Box sx={{ height: "47%", width: "100%" }}>{items[0]}</Box>
      </Box>
    </Box>
  );
}
