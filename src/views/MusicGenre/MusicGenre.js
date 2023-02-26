import React, { useState, useEffect } from "react";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";
// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// COMPONENTS
import CardComponent from "../../components/CardComponent/CardComponent";

const MusicGenre = () => {
  const [albumData, setAlbumData] = useState([]);

  const { genre } = useParams();

  // console.log(genre);

  useEffect(() => {
    const getAlbumData = async () => {
      const q = query(collection(db, "music"), where("genre", "==", genre));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlbumData(docs);
    };
    getAlbumData();
  }, [genre]);

  return (
    <div>
      {albumData.map((data) => {
        return (
          <div key={data.id}>
            <CardComponent albumsData={data} key={data.id} />
          </div>
        );
      })}
    </div>
  );
};

export default MusicGenre;
