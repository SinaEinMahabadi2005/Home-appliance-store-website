import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const Boxes = items?.map((item) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid rgba(0,0,0,0.1)",
        pb: "24px",
        width: "100%",
        height: "17%",
        py: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "25%",
        }}
      >
        <img
          src={import.meta.env.VITE_FILE_URL + item?.images[0]?.url}
          alt={item?.name}
          style={{ objectFit: "cover", height: "100%", width: "50px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",

            fontSize: "12px",
          }}
        >
          {item?.name.split(" ").slice(0, 3).join(" ")} Color : Black
          <Typography fontSize={"12px"}>Remove</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "15%",
          height: "100%",
          border: "1px solid black",
          borderRadius: "10px",
          display: item.cartQuantity === 0 ? "none" : "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "32px",
          transform: "translateX(-140px)",
        }}
      >
        <Typography
          sx={{ fontSize: "32px", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => dispatch(removeItem(item.documentId))}
        >
          -
        </Typography>
        <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
          {item.cartQuantity}
        </Typography>
        <Typography
          sx={{ fontSize: "32px", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => dispatch(addItem(item))}
        >
          +
        </Typography>
      </Box>
      <Typography fontWeight={"bold"} sx={{ transform: "translateX(-110px)" }}>
        ${item.price}
      </Typography>

      <Typography fontWeight={"bold"}>
        ${item.price * item.cartQuantity}
      </Typography>
    </Box>
  ));
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        px: "132px",
        pt: "64px",
        flexDirection: "column",
        display: "flex",
        gap: "32px",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight={"bold"}>
        Cart
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "48px",
          justifyContent: "space-between",
          px: "100px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "48px",
              width: "48px",
              backgroundColor: "black",
              fontWeight: "bold",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </Box>
          <Typography fontWeight={"bold"}>Shopping Cart</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            justifyContent: "start",
            alignItems: "center",
            opacity: "0.5",
          }}
        >
          <Box
            sx={{
              height: "48px",
              width: "48px",
              backgroundColor: "black",
              fontWeight: "bold",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </Box>
          <Typography fontWeight={"bold"}>Checkout details</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            justifyContent: "start",
            alignItems: "center",
            opacity: "0.5",
          }}
        >
          <Box
            sx={{
              height: "48px",
              width: "48px",
              backgroundColor: "black",
              fontWeight: "bold",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </Box>
          <Typography fontWeight={"bold"}>Order complete</Typography>
        </Box>
      </Box>
      {/* down */}
      <Stack
        sx={{ flexDirection: "row", height: "70%", width: "100%", gap: "32px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "60%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid rgba(0,0,0,0.1)",
              pb: "24px",
            }}
          >
            <Typography fontWeight={"bold"}>Product</Typography>
            <Typography fontWeight={"bold"}>Quantity</Typography>
            <Typography fontWeight={"bold"}>Price</Typography>
            <Typography fontWeight={"bold"}>Subtotal</Typography>
          </Box>
          {Boxes}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "30%",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            p: "16px",
            gap: "24px",
          }}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Cart summary
          </Typography>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "5px",
              py: "3px",
              backgroundColor: "#F3F5F7",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <Typography fontWeight={"bold"}>
              <input type="checkbox" style={{ color: "black" }} /> Free shipping
            </Typography>
            <Typography fontWeight={"bold"}>$0.00</Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "5px",
              py: "3px",

              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <Typography fontWeight={"bold"}>
              <input type="checkbox" style={{ color: "black" }} /> Express
              shipping
            </Typography>
            <Typography fontWeight={"bold"}>+$15.00</Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "5px",
              py: "3px",

              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <Typography fontWeight={"bold"}>
              <input type="checkbox" style={{ color: "black" }} /> Pick Up
            </Typography>
            <Typography fontWeight={"bold"}>%21.00</Typography>
          </Box>
          <Box
            borderBottom={"1px solid rgba(0,0,0,0.1)"}
            pb={"20px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <p style={{ fontWeight: "bold" }}>Subtotal</p>{" "}
            <p style={{ fontWeight: "bold" }}>${totalPrice}</p>
          </Box>
          <Box
            borderBottom={"1px solid rgnba(0,0,0,0.1)"}
            pb={"20px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <p style={{ fontWeight: "bold" }}>Total</p>{" "}
            <p style={{ fontWeight: "bold" }}>${totalPrice+15}</p>
          </Box>
          <Button variant="contained" sx={{ width: "100%", height: "50px" , backgroundColor:'#141718' }}>
            Checkout
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
