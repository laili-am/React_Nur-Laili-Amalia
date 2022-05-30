import React from "react";
import Image1 from "./image/4.png";

function EventHandling() {
  return (
    <div className="style">
      <h1>Event Handling</h1>
      <h4>
        <ul>
          State adalah data private sebuah component. Data ini hanya tersedia
          untuk component tersebut dan tidak bisa diakses dari component lain.
          Pada state, data bisa dimodifikasi jika menggunakana setState, dan
          setiap terjadi modifikasi, akan terjadi render ulang. State sendiri
          bersifat asynkronus dan dipakai didalam class.
        </ul>
      </h4>
      <img src={Image1} className="image" alt="image1" />
    </div>
  );
}

export default EventHandling;
