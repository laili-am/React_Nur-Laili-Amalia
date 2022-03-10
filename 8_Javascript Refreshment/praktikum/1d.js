var a = 5; 
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a,b,nama,terdaftar];
let asal = "indonesia";

function perkenalan(){
    let asal = "indonesia";
    return console.log(
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b + 
        "berasal dari " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;

perkenalan()

console.log("array = " + lengkap_arr[2]);

console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);



