import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./AlbumDetail.css";
import CardComponent from "../../components/CardComponent/CardComponent";
import Spinner from "../../components/Spinner/Spinner";

const AlbumDetail = () => {
  const [albumData, setAlbumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("albumData", albumData);

  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    const getAlbumData = async () => {
      const q = query(collection(db, "music"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlbumData(docs);
    };
    getAlbumData();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        albumData.map((data) => {
          return <CardComponent albumsData={data} />;
        })
      )}
    </div>
  );
};

export default AlbumDetail;
