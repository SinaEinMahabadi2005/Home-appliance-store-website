import { Box, Button, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const Boxes = items?.map((item) => (
    <Box
      key={item.documentId}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        alignItems: { xs: "flex-start", sm: "center" },
        borderBottom: "2px solid rgba(0,0,0,0.1)",
        pb: { xs: "16px", sm: "20px", md: "24px" },
        width: "100%",
        minHeight: { xs: "140px", sm: "120px", md: "auto" },
        py: { xs: "12px", sm: "16px", md: "20px" },
        gap: { xs: "16px", sm: "0" },
        position: "relative",
      }}
    >
      {/* Product Info - Always first row on mobile */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: { xs: "100%", sm: "25%" },
          gap: { xs: "12px", sm: "16px" },
          order: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "80px", sm: "60px", md: "50px" },
            height: { xs: "80px", sm: "60px", md: "50px" },
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <img
            src={import.meta.env.VITE_FILE_URL + item?.images[0]?.url}
            alt={item?.name}
            style={{ 
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "4px", sm: "7px" },
            flex: 1,
          }}
        >
          <Typography 
            fontWeight="medium" 
            fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
            sx={{ lineHeight: 1.2 }}
          >
            {item?.name.split(" ").slice(0, 3).join(" ")} 
          </Typography>
          <Typography 
            color="text.secondary" 
            fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
          >
            Color: Black
          </Typography>
          <Typography 
            fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
            sx={{ 
              color: "error.main", 
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" }
            }}
          >
            Remove
          </Typography>
        </Box>
      </Box>

      {/* Price - Second row on mobile, first column on desktop */}
      <Typography 
        fontWeight={"bold"} 
        sx={{ 
          fontSize: { xs: "16px", sm: "17px", md: "18px" },
          order: { xs: 2, sm: 3 },
          alignSelf: { xs: "flex-start", sm: "center" },
          width: { xs: "100%", sm: "auto" },
          pl: { xs: "92px", sm: "0" }, // Align with text (image width + gap)
          mt: { xs: "-8px", sm: "0" }, // Pull up to be closer to name
        }}
      >
        ${item.price}
      </Typography>

      {/* Quantity Selector - Third row on mobile, second column on desktop */}
      <Box
        sx={{
          width: { xs: "100%", sm: "15%" },
          height: { xs: "40px", sm: "50px", md: "60px" },
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: "8px",
          display: item.cartQuantity === 0 ? "none" : "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: "20px", sm: "16px", md: "24px" },
          order: { xs: 3, sm: 2 },
          mt: { xs: "8px", sm: "0" },
          alignSelf: { xs: "flex-start", sm: "center" },
          maxWidth: { xs: "200px", sm: "none" },
        }}
      >
        <Typography
          sx={{ 
            fontSize: { xs: "20px", sm: "22px", md: "24px" }, 
            fontWeight: "bold", 
            cursor: "pointer",
            lineHeight: 1,
            minWidth: "24px",
            textAlign: "center",
          }}
          onClick={() => dispatch(removeItem(item.documentId))}
        >
          -
        </Typography>
        <Typography sx={{ 
          fontSize: { xs: "18px", sm: "20px", md: "22px" }, 
          fontWeight: "bold",
          lineHeight: 1,
          minWidth: "30px",
          textAlign: "center",
        }}>
          {item.cartQuantity}
        </Typography>
        <Typography
          sx={{ 
            fontSize: { xs: "20px", sm: "22px", md: "24px" }, 
            fontWeight: "bold", 
            cursor: "pointer",
            lineHeight: 1,
            minWidth: "24px",
            textAlign: "center",
          }}
          onClick={() => dispatch(addItem(item))}
        >
          +
        </Typography>
      </Box>

      {/* Subtotal - Fourth row on mobile, third column on desktop */}
      <Typography 
        fontWeight={"bold"} 
        sx={{ 
          fontSize: { xs: "16px", sm: "17px", md: "18px" },
          order: { xs: 4, sm: 4 },
          alignSelf: { xs: "flex-end", sm: "center" },
          position: { xs: "absolute", sm: "static" },
          right: { xs: "16px", sm: "auto" },
          bottom: { xs: "16px", sm: "auto" },
          mt: { xs: "0", sm: "0" },
        }}
      >
        ${item.price * item.cartQuantity}
      </Typography>
    </Box>
  ));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: { xs: "16px", sm: "24px", md: "48px", lg: "96px", xl: "132px" },
        pt: { xs: "32px", sm: "48px", md: "64px" },
        pb: { xs: "32px", sm: "48px", md: "64px" },
        flexDirection: "column",
        display: "flex",
        gap: { xs: "24px", sm: "28px", md: "32px" },
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Typography variant="h2" fontWeight={"bold"} sx={{ fontSize: { xs: "28px", sm: "36px", md: "48px" } }}>
        Cart
      </Typography>

      {/* Progress Steps */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "16px", sm: "32px", md: "48px" },
          justifyContent: "space-between",
          px: { xs: "0", sm: "32px", md: "64px", lg: "100px" },
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {[
          { number: 1, label: "Shopping Cart", active: true },
          { number: 2, label: "Checkout details", active: false },
          { number: 3, label: "Order complete", active: false },
        ].map((step, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: { xs: "12px", sm: "16px", md: "24px" },
              justifyContent: "start",
              alignItems: "center",
              opacity: step.active ? "1" : "0.5",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Box
              sx={{
                height: { xs: "36px", sm: "40px", md: "48px" },
                width: { xs: "36px", sm: "40px", md: "48px" },
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "50%",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                flexShrink: 0,
              }}
            >
              {step.number}
            </Box>
            <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>
              {step.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Main Content */}
      <Stack
        sx={{ 
          flexDirection: { xs: "column", md: "row" }, 
          width: "100%", 
          gap: { xs: "24px", sm: "28px", md: "32px" },
          maxWidth: "1400px",
        }}
      >
        {/* Cart Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "12px", sm: "16px" },
            width: { xs: "100%", md: "60%" },
            overflowY: { xs: "visible", md: "auto" },
            maxHeight: { md: "600px" },
          }}
        >
          {/* Table Header - Desktop only */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid rgba(0,0,0,0.1)",
              pb: "24px",
            }}
          >
            <Typography fontWeight={"bold"} fontSize="16px" sx={{ width: "25%" }}>
              Product
            </Typography>
            <Typography fontWeight={"bold"} fontSize="16px" sx={{ width: "15%" }}>
              Quantity
            </Typography>
            <Typography fontWeight={"bold"} fontSize="16px" sx={{ width: "15%" }}>
              Price
            </Typography>
            <Typography fontWeight={"bold"} fontSize="16px" sx={{ width: "15%" }}>
              Subtotal
            </Typography>
          </Box>

          {/* Mobile Header */}
          <Typography 
            sx={{ 
              display: { xs: "block", md: "none" }, 
              fontWeight: "bold", 
              fontSize: "18px",
              borderBottom: "2px solid rgba(0,0,0,0.1)",
              pb: 2,
            }}
          >
            Your Items ({items?.length || 0})
          </Typography>

          {/* Cart Items List */}
          {Boxes}

          {/* Empty State */}
          {(!items || items.length === 0) && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 8,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Your cart is empty
              </Typography>
              <Typography color="text.secondary">
                Add some products to your cart to see them here
              </Typography>
            </Box>
          )}
        </Box>

        {/* Cart Summary */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "40%" },
            minWidth: { xs: "100%", sm: "300px", md: "350px" },
            maxWidth: { xs: "100%", sm: "400px", md: "450px" },
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            p: { xs: "16px", sm: "20px", md: "24px" },
            gap: { xs: "16px", sm: "20px", md: "24px" },
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography variant="h5" fontWeight={"bold"} sx={{ fontSize: { xs: "20px", sm: "22px", md: "24px" } }}>
            Cart summary
          </Typography>

          {/* Shipping Options */}
          {[
            { label: "Free shipping", price: "$0.00" },
            { label: "Express shipping", price: "+$15.00" },
            { label: "Pick Up", price: "%21.00" },
          ].map((option, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: "56px", sm: "64px", md: "70px" },
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: { xs: "12px", sm: "16px" },
                py: { xs: "8px", sm: "12px" },
                backgroundColor: index === 0 ? "#F3F5F7" : "transparent",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "10px",
              }}
            >
              <Typography fontWeight={"bold"} sx={{ display: "flex", alignItems: "center", gap: "8px", fontSize: { xs: "14px", sm: "15px" } }}>
                <input type="checkbox" style={{ width: "16px", height: "16px" }} /> 
                {option.label}
              </Typography>
              <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px" }}>
                {option.price}
              </Typography>
            </Box>
          ))}

          {/* Price Summary */}
          <Box
            borderBottom={"1px solid rgba(0,0,0,0.1)"}
            pb={{ xs: "16px", sm: "20px" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>
              Subtotal
            </Typography>
            <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>
              ${totalPrice}
            </Typography>
          </Box>
          
          <Box
            borderBottom={"1px solid rgba(0,0,0,0.1)"}
            pb={{ xs: "16px", sm: "20px" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>
              Total
            </Typography>
            <Typography fontWeight={"bold"} fontSize={{ xs: "14px", sm: "15px", md: "16px" }}>
              ${totalPrice + 15}
            </Typography>
          </Box>

          {/* Checkout Button */}
          <Button 
            variant="contained" 
            sx={{ 
              width: "100%", 
              height: { xs: "48px", sm: "52px", md: "56px" }, 
              backgroundColor: '#141718',
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: '#000',
              }
            }}
          >
            Checkout
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}