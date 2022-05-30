import React from "react";
import Image1 from "./image/5.png";

function ReactHook() {
  return (
    <div className="style">
      <h1>React Hook</h1>
      <h4>
        <ul>
          Hook merupakan fitur baru yang ada di React, dengan adanya fitur ini,
          kita dapat menggunakan state fitur React yang lain tampa perlu
          menuliskan sebuah kelas.
        </ul>
        <ul>
          Dalam Custom Hook, kita dapat membuat Hook kita sendiri dan
          memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat
          digunakan lagi.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default ReactHook;
