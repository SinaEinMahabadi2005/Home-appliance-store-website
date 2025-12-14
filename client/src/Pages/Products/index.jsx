import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
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
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import Typewriter from "typewriter-effect";

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("createdAt:desc");
  const [minMax, setMinMax] = useState("0-1000");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handlePriceChange = (newValue) => {
    setMinMax(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
    <Box
      key={item._id}
      sx={{
        height: { xs: "auto", sm: "420px" },
        width: {
          xs: "100%",
          sm: "calc(50% - 16px)",
          md: "calc(33.333% - 21.333px)",
          lg: "calc(25% - 24px)",
          xl: "300px",
        },
        mb: { xs: 2, sm: 0 },
      }}
    >
      <ProductCard product={item} />
    </Box>
  ));

  const categoryName =
    categoryId == "all"
      ? "All Rooms"
      : categoryId == "az6509on5rk4j7th7v8ne52b"
      ? "Living Room"
      : categoryId == "waxaaodtymuwyceni5nhsrrn"
      ? "Bedroom"
      : categoryId == "a16st8eewesjhp0xal741ijf"
      ? "Kitchen"
      : "";

  const categories = [
    { id: "all", name: "All Rooms", path: "/products/all/all-category" },
    {
      id: "az6509on5rk4j7th7v8ne52b",
      name: "Living Room",
      path: "/products/az6509on5rk4j7th7v8ne52b/Living-Room",
    },
    {
      id: "waxaaodtymuwyceni5nhsrrn",
      name: "Bedroom",
      path: "/products/waxaaodtymuwyceni5nhsrrn/Bedroom",
    },
    {
      id: "a16st8eewesjhp0xal741ijf",
      name: "Kitchen",
      path: "/products/a16st8eewesjhp0xal741ijf/Kitchen",
    },
  ];

  const priceRanges = [
    { value: "0-1000", label: "All Price" },
    { value: "0-99", label: "$0.00 - $99.99" },
    { value: "100-199", label: "$100.00 - $199.99" },
    { value: "200-299", label: "$200.00 - $299.00" },
    { value: "300-399", label: "$300.00 - $399.00" },
    { value: "400-10000", label: "+ $400.00" },
  ];

  const drawerContent = (
    <Box sx={{ p: 3, width: 280 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          Filters
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "start",
            width: "100%",
          }}
        >
          <Typography fontWeight={"bold"} fontSize={"24px"}>
            CATEGORIES
          </Typography>
          {categories.map((cat) => (
            <Typography
              key={cat.id}
              sx={{
                opacity: categoryId == cat.id ? "1" : "0.5",
                cursor: "pointer",
                borderBottom:
                  categoryId == cat.id
                    ? "2px solid black"
                    : "2px solid transparent",
                transition: "all .5s",
                fontSize: "16px",
                width: "100%",
                pb: 1,
              }}
              onClick={() => {
                navigate(cat.path);
                handleDrawerToggle();
              }}
            >
              {cat.name}
            </Typography>
          ))}
          <Typography fontSize={"24px"} fontWeight={"bold"}>
            PRICE
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              value={minMax}
              onChange={(e) => handlePriceChange(e.target.value)}
            >
              {priceRanges.map((range) => (
                <FormControlLabel
                  key={range.value}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontWeight: "bold",
                      fontSize: "14px",
                    },
                  }}
                  labelPlacement="end"
                  value={range.value}
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
                  label={range.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "30vh", sm: "40vh", md: "50vh" },
          width: "100% !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          px: { xs: "16px", sm: "32px", md: "64px", lg: "132px" },
          position: "relative",
        }}
      >
        <img
          src="/images/static6.png"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            wordSpacing: { xs: "5px", sm: "10px" },
            position: "absolute",
            top: { xs: "20%", sm: "25%", md: "30%" },
            display: "flex",
            alignItems: "center",
            gap: { xs: "8px", sm: "16px", md: "24px" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Home{" "}
          <ArrowForwardIosIcon
            sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }}
          />{" "}
          Shop
        </Typography>
        <Typography
          sx={{
            wordSpacing: "10px",
            position: "absolute",
            top: { xs: "35%", sm: "40%", md: "40%" },
            fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
            fontWeight: "bold",
            textAlign: "center",
            px: { xs: 2, sm: 0 },
          }}
        >
          Shop Page
        </Typography>
        <div
          style={{
            wordSpacing: "10px",
            position: "absolute",
            top: { xs: "55%", sm: "60%", md: "60%" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            textAlign: "center",
            px: { xs: 2, sm: 0 },
            transform:'translateY(32px)'
          }}
        >
          <Typewriter
            options={{
              strings: "Let’s design the place you always imagined." ,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Box>

      {/* Filter and Sort Bar */}
      <Stack
        flexDirection={"row"}
        my={{ xs: "24px", sm: "32px", md: "48px" }}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        px={{ xs: "16px", sm: "32px", md: "64px", lg: "132px" }}
        alignItems={"center"}
        gap={{ xs: 2, sm: 0 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ p: 0 }}>
              <FilterListIcon />
            </IconButton>
          )}
          <Typography
            sx={{
              display: "flex",
              gap: { xs: "8px", sm: "16px" },
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <TuneRoundedIcon
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: "bold",
                }}
              />
            )}
            {isMobile ? "Filter" : "Filter"}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
            fontWeight: "bold",
            textAlign: "center",
            transform: {
              xs: "translateX(0)",
              sm: "translateX(-100px)",
              md: "translateX(-200px)",
              lg: "translateX(-330px)",
            },
            order: { xs: 3, sm: 2 },
            width: { xs: "100%", sm: "auto" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          {categoryName} Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            order: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              width: { xs: 200, sm: 250, md: 300 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: { xs: 70, sm: 80 },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-icon": { color: "black" },
              }}
            >
              <InputLabel
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: { xs: "12px", sm: "14px" },
                }}
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
                size={isMobile ? "small" : "medium"}
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
            {!isMobile && (
              <>
                <ViewModuleRoundedIcon
                  sx={{
                    rotate: "90deg",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  }}
                />
                <GridViewRoundedIcon
                  sx={{
                    opacity: "0.5",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  }}
                />
                <ViewAgendaRoundedIcon
                  sx={{
                    rotate: "90deg",
                    opacity: "0.5",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  }}
                />
              </>
            )}
          </Box>
        </Box>
      </Stack>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          px: { xs: "16px", sm: "32px", md: "64px", lg: "132px" },
        }}
      >
        {/* Sidebar Filters - Desktop */}
        {!isMobile && (
          <Box
            sx={{
              width: { md: "25%", lg: "23%" },
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
              pr: { md: 3, lg: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "start",
                width: "100%",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={"24px"}>
                CATEGORIES
              </Typography>
              {categories.map((cat) => (
                <Typography
                  key={cat.id}
                  sx={{
                    opacity: categoryId == cat.id ? "1" : "0.5",
                    cursor: "pointer",
                    borderBottom:
                      categoryId == cat.id
                        ? "2px solid black"
                        : "2px solid transparent",
                    transition: "all .5s",
                  }}
                  onClick={() => navigate(cat.path)}
                >
                  {cat.name}
                </Typography>
              ))}
              <Typography fontSize={"24px"} fontWeight={"bold"}>
                PRICE
              </Typography>
              <FormControl sx={{ width: "100%" }}>
                <RadioGroup
                  value={minMax}
                  onChange={(e) => handlePriceChange(e.target.value)}
                >
                  {priceRanges.map((range) => (
                    <FormControlLabel
                      key={range.value}
                      sx={{
                        "& .MuiFormControlLabel-label": { fontWeight: "bold" },
                      }}
                      labelPlacement="end"
                      value={range.value}
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
                      label={range.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        )}

        {/* Products Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: { xs: "100%", md: isMobile ? "100%" : "75%" },
            justifyContent: { xs: "center", sm: "flex-start" },
            gap: { xs: "16px", sm: "24px", md: "32px" },
          }}
        >
          {items}
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
