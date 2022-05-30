import React from "react";
import Image1 from "./image/6.png";

function ReactForm() {
  return (
    <div className="style">
      <h1>React Form</h1>
      <h4>
        <ul>
          Form merupakan salah satu hal krusial dalam pengembangan suatu
          aplikasi website. Form sendiri digunakan untuk menghandle inputan dari
          user, kita dapat menemukan form pada saat kita melakukan login,
          mendaftarankan sesuatu, memberikan feedback, mengisi data, dan lain
          sebagainya.
        </ul>
        <ul>
          Controlled Component merupakan sebuah elemen masukan form yang
          nilainya dikontrol oleh React
        </ul>
        <ul>
          Uncontrolled component adalah alternatif dari controlled component,
          dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis
          uncontrolled component, alih-alih menulis event handler untuk setiap
          pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai
          form dari DOM.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default ReactForm;
