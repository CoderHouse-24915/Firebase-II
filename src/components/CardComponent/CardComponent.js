import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ albumsData }) => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardMedia component='img' image={albumsData.img} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{albumsData.artist}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Album: {albumsData.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Year: {albumsData.year}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Price: ${albumsData.price}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Stock: {albumsData.stock}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardComponent;
