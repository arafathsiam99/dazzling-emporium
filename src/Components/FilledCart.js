import { Grid, Button, Typography } from "@material-ui/core";
import React from 'react';
import { Link } from "react-router-dom";
import CartItem from "./Cart/CartItem/CartItem";
import useStyles from "./Cart/styles";

const FilledCart = ({
  cart,
  handleUpdateCartQty,
  handelRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        {cart.line_items?.map((item) => (
          <Grid item xs={12} sm={4} key={item?.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handelRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:{cart?.subtotal?.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
          component={Link} to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilledCart;