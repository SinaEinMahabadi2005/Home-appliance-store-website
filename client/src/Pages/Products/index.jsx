import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import ProductCard from "./ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
function priceText(value) {
  return `$${value}`;
}
const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 200,
    label: "$200",
  },
  {
    value: 400,
    label: "$400",
  },
  {
    value: 600,
    label: "$600",
  },
  {
    value: 800,
    label: "$800",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("createdAt:desc");
  const [minMax, setMinMax] = useState('0-1000');


  const navigate = useNavigate();
  const handlePriceChange = ( newValue) => {
    setMinMax(newValue);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `products?populate=*&${
          categoryId == "all"
            ? ""
            : `filters[categories][documentId][$eq]=${categoryId}&`
        }filters[price][$lte]=${minMax.split("-")[1]}&filters[price][$gte]=${
          minMax.split("-")[0]
        }&sort=${sort}`
      );
      setProducts(response.data);
    })();
  }, [categoryId, sort, minMax]);
  const items = products?.map((item) => (
    <Box sx={{ height: "420px", width: "300px" }}>
      {" "}
      <ProductCard key={item._id} product={item} />
    </Box>
  ));
  return (
    <Box>
      <Box
        sx={{
          height: "50vh",
          width: "100% !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          px: "132px",
          position: "relative",
        }}
      >
        <img
          src="/images/static6.png"
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
        <Typography
          sx={{
            wordSpacing: "10px",
            position: "absolute",
            top: "30%",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          Home <ArrowForwardIosIcon /> Shop
        </Typography>
        <Typography
          sx={{
            wordSpacing: "10px",
            position: "absolute",
            top: "40%",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          Shop Page
        </Typography>
        <Typography
          sx={{ wordSpacing: "10px", position: "absolute", top: "60%" }}
        >
          Let’s design the place you always imagined.
        </Typography>
      </Box>
      <Stack
        flexDirection={"row"}
        my={"48px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        px={"132px"}
        alignItems={'center'}
      >
        <Typography
          sx={{
            display: "flex",
            gap: "16px",
            fontSize: "24px",
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          <TuneRoundedIcon sx={{ fontSize: "24px", fontWeight: "bold" }}  />{" "}
          Filter{" "}
        </Typography>
        <Typography sx={{ fontSize: "24px", fontWeight: "bold",transform:'translateX(-330px)' }}>
         {categoryId == "all"?'All Rooms':categoryId == "az6509on5rk4j7th7v8ne52b"?'Living Room':categoryId == "waxaaodtymuwyceni5nhsrrn"?'Bedroom':categoryId == "a16st8eewesjhp0xal741ijf"?'Kitchen':''} Products
        </Typography>
        <Box>
          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: 80,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-icon": { color: "black" },
              }}
            >
              <InputLabel
                sx={{ fontWeight: "bold", color: "black" }}
                id="SortId"
              >
                Sort
              </InputLabel>
              <Select
                labelId="SortId"
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                autoWidth
                label="Sort"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"name:asc"}>A-Z</MenuItem>
                <MenuItem value={"name:desc"}>Z-A</MenuItem>
                <MenuItem value={"price:asc"}>Lowest Price</MenuItem>
                <MenuItem value={"price:desc"}>Highest Price</MenuItem>
                <MenuItem value={"createdAt:desc"}>Newest Product</MenuItem>
              </Select>
            </FormControl>
            <ViewModuleRoundedIcon sx={{ rotate: "90deg" }} />
            <GridViewRoundedIcon sx={{ opacity: "0.5" }} />
            <ViewAgendaRoundedIcon sx={{ rotate: "90deg", opacity: "0.5" }} />
          </Box>
        </Box>
      </Stack>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "23%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <Typography fontWeight={"bold"} fontSize={"24px"}>
              CATEGORIES
            </Typography>
            <Typography
              sx={{
                opacity: categoryId == "all" ? "1" : "0.5",
                cursor: "pointer",
                borderBottom:
                  categoryId == "all"
                    ? "2px solid black"
                    : "2px solid transparent",
                transition: "all .5s",
              }}
              onClick={() => navigate("/products/all/all-category")}
            >
              All Rooms
            </Typography>
            <Typography
              sx={{
                opacity: categoryId == "az6509on5rk4j7th7v8ne52b" ? "1" : "0.5",
                cursor: "pointer",
                borderBottom:
                  categoryId == "az6509on5rk4j7th7v8ne52b"
                    ? "2px solid black"
                    : "2px solid transparent",
                transition: "all .5s",
              }}
              onClick={() =>
                navigate("/products/az6509on5rk4j7th7v8ne52b/Living-Room")
              }
            >
              Living Room
            </Typography>
            <Typography
              sx={{
                opacity: categoryId == "waxaaodtymuwyceni5nhsrrn" ? "1" : "0.5",
                cursor: "pointer",
                borderBottom:
                  categoryId == "waxaaodtymuwyceni5nhsrrn"
                    ? "2px solid black"
                    : "2px solid transparent",
                transition: "all .5s",
              }}
              onClick={() =>
                navigate("/products/waxaaodtymuwyceni5nhsrrn/Bedroom")
              }
            >
              Bedroom
            </Typography>
            <Typography
              sx={{
                opacity: categoryId == "a16st8eewesjhp0xal741ijf" ? "1" : "0.5",
                cursor: "pointer",
                borderBottom:
                  categoryId == "a16st8eewesjhp0xal741ijf"
                    ? "2px solid black"
                    : "2px solid transparent",
                transition: "all .5s",
              }}
              onClick={() =>
                navigate("/products/a16st8eewesjhp0xal741ijf/Kitchen")
              }
            >
              Kitchen
            </Typography>
            <Typography fontSize={"24px"} fontWeight={"bold"}>
              PRICE
            </Typography>
            <FormControl>
              <RadioGroup
                column
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={minMax}
                onChange={(e)=>handlePriceChange(e.target.value)}
              >
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='0-1000'
                  control={
                    <Radio
                      sx={{
                        
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label="All Price"
                />
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='0-99'
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label='$0.00 - $99.99'
                />
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='100-199'
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label="$100.00 - $199.99"
                />
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='200-299'
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label="$200.00 - $299.00"
                />
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='300-399'
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label="$300.00 - $399.00"
                />
                <FormControlLabel
                  sx={{ '& .MuiFormControlLabel-label': { fontWeight: 'bold' } }}
                  labelPlacement="end"
                  value='400-10000'
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          borderRadius: "4px",
                          backgroundColor: "white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                        },
                      }}
                    />
                  }
                  label='+ $400.00'
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "75%",
            justifyContent: "strat",
            gap: "32px",
          }}
        >
          {items}
        </Box>
      </Box>
    </Box>
  );
}
