import React, { useState } from "react";

const initialVal = {
  id: "",
  nama: "",
  umur: 0,
  jenisKelamin: "",
};
function EditPage(props) {
  const [val, setVal] = useState({
    id: "",
    nama: "",
    umur: 0,
    jenisKelamin: "",
  });

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    props.edit(val);
    setVal(initialVal);
  };

  return (
    <>
      <div className="edit">
        <label htmlFor="id">Select ID : </label>
        <select name="id" onChange={handleChange} required>
          <option value="">Select</option>
          {props.option?.map((i) => {
            return (
              <>
                <option key={i} value={i}>
                  {i}
                </option>
              </>
            );
          })}
        </select>
        <label htmlFor="Nama" style={style}>
          Nama :
        </label>
        <input
          type="text"
          name="nama"
          value={val.nama}
          onChange={handleChange}
          required
        />
        <label htmlFor="Umur" style={style}>
          Umur :
        </label>
        <input
          type="number"
          value={val.umur}
          name="umur"
          onChange={handleChange}
          required
        />
        <label htmlFor="jk" style={style}>
          Jenis Kelamin :
        </label>
        <input
          type="text"
          value={val.jenisKelamin}
          name="jenisKelamin"
          onChange={handleChange}
          required
        />
        <br /> <br />
        <button onClick={() => handleSubmit()}>Change</button>
      </div>
    </>
  );
}
const style = {
  display: "block",
};
export default EditPage;
