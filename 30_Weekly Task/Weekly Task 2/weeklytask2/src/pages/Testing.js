import React from "react";
import Image1 from "./image/8.1.png";
import Image2 from "./image/8.2.png";
import Image3 from "./image/8.3.png";

function Testing() {
  return (
    <div className="style">
      <h1>Testing</h1>
      <h4>
        <ul>
          Testing adalah proses memverifikasi bahwa test assertions dimana nilai
          true akan dikembalikan jika kode kita benar dan bahwa code kita tetap
          benar sepanjang masa aplikasi. Fungsinya adalah kita akan mempunyai
          coverage yang baik pada aplikasi kita, jadi ketika ada perubahan dan
          menyebabkan bagian lain menjadi broken, akan lebih mudah utnuk
          diketahui. Selain itu, testing juga berfungsi untuk mengurangi bug
          pada aplikasi dengan mencegah beberapa hal yang berpotensi menjadi
          bug.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
      <img src={Image2} className="image" alt="image2" />
      <img src={Image3} className="image" alt="image3" />
    </div>
  );
}

export default Testing;
