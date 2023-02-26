import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardAlbumComponent = ({ albumsData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={albumsData.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {albumsData.artist}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {albumsData.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {albumsData.year} | {albumsData.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {albumsData.price} | stock: {albumsData.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAlbumComponent;
