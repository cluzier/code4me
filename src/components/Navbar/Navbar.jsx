import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./navbarStyles";

function Navbar({ totalItems }) {
  const styles = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={styles.title}
            color="inherit"
          >
            Code4Me
          </Typography>
          <Typography
            component={Link}
            to="#about"
            variant="h7"
            className={styles.title}
            color="inherit"
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="#features"
            variant="h7"
            className={styles.title}
            color="inherit"
          >
            Features
          </Typography>
          <Typography
            component={Link}
            to="#shop"
            variant="h7"
            className={styles.title}
            color="inherit"
          >
            Shop
          </Typography>
          <div className={styles.grow} />
          {location.pathname === "/" && (
            <div className={styles.shop}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
