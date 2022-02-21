import React, { useState, useEffect } from 'react';
// REACT ROUTER DOM
import { useParams } from 'react-router-dom';
// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// COMPONENTS
import CardComponent from '../../components/CardComponent/CardComponent';

const GenderType = () => {
	const [albumData, setAlbumData] = useState([]);

	const gender = useParams();

	const albumGender = gender.gender;

	// console.log('GENERO', gender);

	useEffect(() => {
		const getAlbumData = async () => {
			const q = query(
				collection(db, 'music'),
				where('gender', '==', albumGender)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setAlbumData(docs);
		};
		getAlbumData();
	}, [albumGender]);

	return (
		<div>
			{albumData.map((data) => {
				return (
					<div>
						<CardComponent albumsData={data} key={data.id} />
					</div>
				);
			})}
		</div>
	);
};

export default GenderType;
