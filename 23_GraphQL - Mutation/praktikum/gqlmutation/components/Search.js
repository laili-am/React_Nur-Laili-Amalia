import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

function Search(props) {
  const [uid, setUID] = useState();

  const handleChange = (e) => {
    if (e.target) {
      setUID(e.target.value);
    }
  };
  return (
    <>
      <h5>Cari pengunjung </h5>
      <input type="number" placeholder="Masukkan id " onChange={handleChange} />
      <button>CARI </button>
    </>
  );
}

export default Search;
