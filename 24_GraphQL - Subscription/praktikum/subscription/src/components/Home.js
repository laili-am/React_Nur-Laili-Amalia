import { useMutation, useLazyQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { GETdata, DELETE, EDITdata, GETbyid, INSERT } from "../store/query";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import EditPage from "./Edit";
import PassengerInput from "./PassengerInput";

function App() {
  const { data } = useSubscription(GETdata);
  const [fetchDatabyID, { data: dataID }] = useLazyQuery(GETbyid);
  const [deleteTodo] = useMutation(DELETE);
  const [editList] = useMutation(EDITdata);
  const [insertTodo] = useMutation(INSERT);

  const [list, setList] = useState([]);
  const [option, setOption] = useState([]);
  const [uid, setUID] = useState("");
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    if (e.target) {
      setUID(e.target.value);
    }
  };

  const searchbyID = () => {
    if (uid === "") {
      alert("Masukkan id");
      setDone(false);
    } else {
      fetchDatabyID({
        variables: {
          id: uid,
        },
      });
      setUID("");
      setDone(true);
    }
  };

  const getAllData = () => {
    setList(data?.list_pengunjung);
    setDone(false);
  };

  const hapusPengunjung = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
    });
  };

  const editbyID = (val) => {
    val.id = parseInt(val.id);
    editList({
      variables: {
        id: val.id,
        nama: val.nama,
        umur: val.umur,
        jenis_kelamin: val.jenisKelamin,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    insertTodo({
      variables: {
        jenis_kelamin: newUser.jenisKelamin,
        nama: newUser.nama,
        umur: newUser.umur,
      },
    });
  };

  useEffect(() => {
    setList(data?.list_pengunjung);
    setOption(data?.list_pengunjung.map((i) => i.id));
  }, [data]);

  useEffect(() => {
    setList(dataID?.list_pengunjung);
  }, [dataID]);

  return (
    <div className="App">
      <Header />

      <div className="row">
        <div className="col col-1">
          <h4>Update Data</h4>
          <EditPage option={option} edit={editbyID} />
        </div>
        <div className="col col-1">
          <h4>Data Baru</h4>
          <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
        <div className="col col-3">
          {list !== [] && (
            <ListPassenger data={list} hapusPengunjung={hapusPengunjung} />
          )}
        </div>
        <div className="col">
          <div className="searchbox">
            <b style={{ marginLeft: "10px", marginTop: "5px" }}>
              Cari pengunjung
            </b>
            <div>
              <input
                type="number"
                value={uid}
                placeholder="Masukkan id pengunjung "
                onChange={handleChange}
              />
              <button onClick={searchbyID}>Cari </button>
            </div>
          </div>

          {done && (
            <>
              <h5 style={{ display: "inline-block" }}>Refetch All Data?</h5>
              <span></span>
              <button onClick={getAllData}>Refetch</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
