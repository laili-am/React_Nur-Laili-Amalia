import React from "react";
import Image1 from "./image/9.png";

function Deployment() {
  return (
    <div className="style">
      <h1>Deployment</h1>
      <h4>
        <ul>
          React mengandung banyak pesan peringatan secara default,
          peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi.
          Tetapi, peringatan-peringatan ini dapat membuat React menjadi lebih
          besar dan lambat. Oleh karena itu, kita perlu melakukan deploy
          aplikasi yang bertujuan untuk melakukan buils agar aplikasi kita
          menjadi versi production sehingga performanya lebih ringan dan cepat.
        </ul>
        <ul>
          Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi
          yang sudah kita buat, harapannya aplikasi tersebut dapat diakses oleh
          banyak orang tidak hanya oleh kita sendiri.
        </ul>
        <ul>
          Surge adalah layanan penerbit website statik untuk Front End
          Developers.
        </ul>
        <ul>
          Netlify adalah salah satu platform penyedia layanan build tools
          sekaligus Continous Deployment. Netlify memungkinkan kita untuk
          mempublish website statis secara gratis. Netlify juga sudah
          terintegrasi dengan Git Host popular seperti Github, Gitlab dan
          Bitbucket.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default Deployment;
