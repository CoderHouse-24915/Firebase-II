import React, { useState, useEffect } from "react";

import CardAlbumComponent from "../CardAlbumComponent/CardAlbumComponent";
import { Link } from "react-router-dom";

import "./CardList.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAlbums = async () => {
      const q = query(collection(db, "music"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setAlbumsData(docs);
    };
    getAlbums();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {albumsData.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardAlbumComponent albumsData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;
