import React, { useState, useRef } from 'react';

export default function FormPage(){
    const dataKosong = {
        nama:"",
        email:"",
        handphone:0,
        pendidikan:"",
        kelas: "",
        harapan: ""
    }
    const baseError = {
        nama: "",
        email: "",
        handphone: "",
    }     
    const [data, setData] = useState(dataKosong)
    const nameregex = /^[A-Z a-z]*$/g;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; 
    const nomorHandphoneRegex = /^[0-9]*$/g;
    const [errMsg, setErrMsg] =useState(baseError);
    const foto = useRef (null)
    const handleNama = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "nama"){
            if(nameregex.test(value)){
                setErrMsg({
                    ...errMsg,
                    nama:"",
                });
            }else{
                setErrMsg({
                    ...errMsg,
                    nama:"Nama Lengkap Harus Berupa Huruf",
                });
            }
            console.log(errMsg)
        }
        setData({
            ...data, 
            [name]: value
        })
        // console.log("data", data)
    }
    const handleEmail = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "email"){
            if(emailRegex.test(value)){
                setErrMsg({
                    ...errMsg,
                    email:"",
                });
            }else{
                setErrMsg({
                    ...errMsg,
                    email:"Email Tidak Sesuai",
                });
            }
            console.log(errMsg)
        }
        setData({
            ...data, 
            [name]: value
        })
        // console.log("data", data)
    }
    const handleSubmit = (event) => {
        if (errMsg !== ""){
            alert("Terdapat data yang tidak sesusai")
        }else{
            alert(`Data Pendaftaran "${data.nama}" Berhasil diterima`)
            resetData()
        }
        event.preventDefault()
    }
    const resetData = () => {
        setData(dataKosong);
        setErrMsg=""
    }
    const handleHandpone = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "handphone"){
            if(nomorHandphoneRegex.test(value)){
                setErrMsg({
                    ...errMsg,
                    handphone:"",
                });
            }else{
                setErrMsg({
                    ...errMsg,
                    handphone:"No Handphone Tidak Sesuai",
                });
            }
            console.log(errMsg)
        }
        setData({
            ...data, 
            [name]: value
        })
        // console.log("data", data)
    }
    console.log(data)
    return(
        <>
        <h1 style={{"text-align":"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Nama Lengkap:</p>
                <input type="text" name="nama" onChange={handleNama} required value={data.nama}/>
            </label>
            <label>
                <p>Email:</p>
                <input type="email" name="email" onChange={handleEmail} required value={data.email}/>
            </label>
            <label>
                <p>No Handphone:</p>
                <input type="number" name="handphone" minlength="9" maxlength="14" required onChange={handleHandpone} value={data.handphone}/>
            </label>
            <label>
                <p>Latar Belakang Pendidikan:</p>
                <input type="radio" name="latarbelakang" value="it"/>IT
                <input type="radio" name="latarbelakang" value="nonit"/>Non IT
            </label>
            <label>
                <p>Kelas Coding yang Dipilih:</p>
                <select name="kelas" required>
                <option selected>--Pilih Salah Satu Program--</option>
                <option value="backend">1. Coding Backend with Golang</option>
                <option value="frontend">2. Coding Frontend with ReactJS</option>
                <option value="fullstack">3. Fullstack Developer</option>
                </select>
            </label>
            <label>
                <p>Foto Surat Kesungguhan:</p>
                <input type="file" refs={foto} name="foto"/>
            </label>
            <label>
                <p>Harapan Untuk Coding Bootcamp Ini:</p>
                <textarea name="harapan"/>
            </label>
                <p>{errMsg.name}</p>
                <p>{errMsg.email}</p> 
                <p>{errMsg.handphone}</p>
            <label>
                <button onClick={handleSubmit} type="submit" value="Sumbit">Submit</button>
                <button onClick={resetData}>Reset</button>
            </label>      
        </form>
        </>
    )

}