import React, { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import CardAlbumComponent from "../../components/CardAlbumComponent/CardAlbumComponent";

// FIRBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// COMPONENTS

const MusicGenre = () => {
  const [albumsDataByGenre, setAlbumsDataByGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { genre } = useParams();

  // console.log(genre);

  // console.log(albumsDataByGenre);

  useEffect(() => {
    setIsLoading(true);
    const getAlbums = async () => {
      const q = query(collection(db, "music"), where("genre", "==", genre));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setAlbumsDataByGenre(docs);
    };
    getAlbums();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [genre]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        albumsDataByGenre.map((data) => {
          return <CardAlbumComponent albumsData={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default MusicGenre;
