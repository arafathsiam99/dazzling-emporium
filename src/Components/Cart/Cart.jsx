import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import FilledCart from "../FilledCart";
import Emptycart from "../Emptycart";

const Cart = ({
  cart,
  // handleUpdateCartQty,
  // handelRemoveFromCart,
  // handleEmptyCart,
}) => {
  const isEmpty = !cart?.line_items?.length;
  const classes = useStyles();

  if (!cart.line_items) return "Loading..........";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <Emptycart /> : <FilledCart cart={cart} />}
    </Container>
  );
};

export default Cart;
