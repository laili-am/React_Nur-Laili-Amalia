import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListPasenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import EditPage from "./Edit";
import {
  GETPengunjung,
  GETbyid,
  DELETE,
  INSERT,
  EDITdata,
} from "../store/query";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";

function Home() {
  const [fetchDatabyID, { data, loading }] = useLazyQuery(GETbyid);
  const { data: respond, loading: isLoad, refetch } = useQuery(GETPengunjung);
  const [deleteTodo] = useMutation(DELETE, {
    refetchQueries: [GETPengunjung],
  });
  const [insertTodo] = useMutation(INSERT, {
    refetchQueries: [GETPengunjung],
  });
  const [editList] = useMutation(EDITdata, {
    refetchQueries: [GETPengunjung],
  });

  const [list, setList] = useState([]);
  const [uid, setUID] = useState("");
  const [option, setOption] = useState([]);
  const [done, setDone] = useState(false);

  const hapusPengunjung = (id) => {
    deleteTodo({
      variables: {
        id: id,
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

  const handleChange = (e) => {
    if (e.target) {
      setUID(e.target.value);
    }
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

  const allData = () => {
    if (respond?.list_pengunjung === list) {
      alert("Data sedang ditampilkan");
    }
    setList(respond?.list_pengunjung);
    setDone(false);
  };

  useEffect(() => {
    setList(respond?.list_pengunjung);
  }, [respond]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setOption(list?.map((i) => i.id));
  }, [list]);

  useEffect(() => {
    setList(data?.list_pengunjung);
  }, [data]);
  return (
    <>
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
          {isLoad || loading ? (
            <h1>Loading data....</h1>
          ) : (
            <ListPasenger data={list} hapusPengunjung={hapusPengunjung} />
          )}
          {done && (
            <>
              <h5 style={{ display: "inline-block" }}>Refetch All Data?</h5>
              <span></span>
              <button onClick={allData}>Refetch</button>
            </>
          )}
        </div>
        <div className="col">
          <div className="searchbox">
            <b style={{ marginLeft: "10px", marginTop: "5px" }}>
              Cari pengunjung{" "}
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
        </div>
      </div>
    </>
  );
}
export default Home;
