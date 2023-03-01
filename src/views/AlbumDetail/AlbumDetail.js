import React, { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import CardAlbumComponent from "../../components/CardAlbumComponent/CardAlbumComponent";

// FIRBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";

import "./AlbumDetail.css";

const AlbumDetail = () => {
  const [albumData, setAlbumData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  // console.log(id);

  // console.log(albumData);

  useEffect(() => {
    setIsLoading(true);
    const getAlbums = async () => {
      const q = query(collection(db, "music"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setAlbumData(docs);
    };
    getAlbums();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        albumData.map((data) => {
          return <CardAlbumComponent albumsData={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default AlbumDetail;
