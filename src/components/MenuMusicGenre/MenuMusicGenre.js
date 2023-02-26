import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuMusicGenre = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "red",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>M</span>usic Genre
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/music-genre/ebm" style={styles.link}>
            EBM
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/music-genre/industrial" style={styles.link}>
            Industrial
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/music-genre/metal" style={styles.link}>
            Metal
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/music-genre/rock" style={styles.link}>
            Rock
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/music-genre/pop" style={styles.link}>
            Pop
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuMusicGenre;
