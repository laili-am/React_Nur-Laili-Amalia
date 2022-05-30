import React from "react";
import Image1 from "./image/7.png";
import style from "./style.css";

function Redux() {
  return (
    <div className="style">
      <h1>Global State Management And Data Fetching</h1>
      <h4>
        <ul>
          Redux adalah library untuk manajemen state global yang menggunakan
          struktur "one-way data flow" dan menggunakan beberapa tipe code
        </ul>
        <ul>
          Thunk Middleware untuk redux yang memungkinkan kita untuk membuat
          action creator yang mengembalikan function bukan action
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default Redux;
