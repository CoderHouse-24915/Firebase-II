import React, { useState, useEffect } from "react";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";

// COMPONENTS

const MusicGenre = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Albums by Music Genre</h1>
    </div>
  );
};

export default MusicGenre;
