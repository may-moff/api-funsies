import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchApi.css"

const SearchApi = () => {
  const [artTitle, setArtTitle] = useState("");
  const [artMaker, setArtMaker] = useState("");
  const [artImage, setArtImage] = useState("");

  const artData = async () => {
    try {
    
      const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&involvedMaker=Maurice+Leroy");
      setArtTitle(res.data.artObjects[0].title);
      setArtMaker(res.data.artObjects[0].principalOrFirstMaker);
      setArtImage(res.data.artObjects[0].webImage.url);

     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    artData();
  }, []);

  return (
    <div>
    
      <div className="card">
        <img src={artImage} style={{ width: "50%" }} />
        <h1>Artist: {artMaker}</h1>  
        <p>Title: {artTitle}</p>
      </div>
    </div>
  );
}

export default SearchApi
