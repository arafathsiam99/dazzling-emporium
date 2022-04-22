import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Emptycart = () => {
  return (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
      <Link to ="/" className="classes.link"> start adding some!</Link>
    </Typography>
  );
};

export default Emptycart;
