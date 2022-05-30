import React from "react";
import Image1 from "./image/1.1.png";
import Image2 from "./image/1.2.png";
import Image3 from "./image/1.3.png";

function Introduction() {
  return (
    <div className="style">
      <h1>Introduction React</h1>
      <h4>
        <ul>
          React merupakan library (yang mengatur adalah code kita), bukan
          framework (code kota diatur oleh framework)
        </ul>
        <ul>Kenapa React</ul>
        <ul>
          <li>Deklaratif</li>
          <li>Berbasis Komponen</li>
          <li>Belajar sekali, tulis dimana saja</li>
          <li>Sudah Teruji</li>
          <li>Teknologi yang Popular</li>
        </ul>
        <ul>
          Virtual DOM adalah representasi dari UI berbentuk javascript Object
          yang disimpan pada memori.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
      <img src={Image2} className="image" alt="image2" />
      <img src={Image3} className="image" alt="image3" />
    </div>
  );
}

export default Introduction;
