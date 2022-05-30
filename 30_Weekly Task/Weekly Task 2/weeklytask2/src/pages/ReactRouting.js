import React from "react";
import Image1 from "./image/3.1.png";
import Image2 from "./image/3.2.png";
import Image3 from "./image/3.3.png";
import Image4 from "./image/3.4.png";
import Image5 from "./image/3.5.png";

function ReactRouting() {
  return (
    <div className="style">
      <h1>React Routing</h1>
      <h4>
        <ul>
          Router merupakan modul dalam react yang berfungsi untuk melakukan
          proses novigasi pada SPA (Single Page Application).
        </ul>
        <ul>
          Multi Page Application (MPA) atau tradisional web app merupakan
          aplikasi website dimana perlu memuat ulang seluruh halaman web setiap
          kali membuat permintaan baru.
        </ul>
        <ul>
          Single Page Application merupakan salah satu aplikasi website dimana
          hanya ada 1 halaman yang menangani semua akitivitas yang terjadi dalam
          aplikasi tersebut.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
      <img src={Image2} className="image" alt="image2" />
      <img src={Image3} className="image" alt="image3" />
      <img src={Image4} className="image" alt="image4" />
      <img src={Image5} className="image" alt="image5" />
    </div>
  );
}

export default ReactRouting;
