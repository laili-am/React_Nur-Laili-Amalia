import React from "react";
import Image1 from "./image/2.png";

function RecatFundamental() {
  return (
    <div className="style">
      <h1>React Fundamental</h1>
      <h4>
        <ul>
          JSX atau javascript XML merupakan ekstensi syntax pada javascript yang
          disarankan di React karena dapat lebih menggambarkan apa yang
          seharusnya tampak pada User Interface, bentuk sintaks ini bukan berupa
          string maupun HTML.
        </ul>
        <ul>
          Alasan menggunakan JSX karena JSX dibuat berdasarkan fakta atau logika
          rendering yang sangat terikat dengan logic UI. Komponen React adalah
          bagian kode yang dapat digunakan kembali yang digunakan untuk
          menentukan tampilan, behavior, dan state sebagian UI.
        </ul>
        <ul>
          Props atau properties berfungsi untuk membuat kita dapat memberikan
          argumen/data komponen dan membuat komponen menjadi lebih dinamis,
          props pada komponen tidak dapat diubah dan read-only.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default RecatFundamental;
