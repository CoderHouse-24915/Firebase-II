import React, { useState } from "react";

// Firebase
import { db } from "../../firebase/firebaseConfig";

import "./Shop.css";

import TextField from "@mui/material/TextField";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const Shop = () => {
  return (
    <div style={styles.containerShop}>
      <h1>Shop</h1>
      <form className="FormContainer">
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
        />
        <button className="btnASendAction">Send</button>
      </form>
    </div>
  );
};

export default Shop;
