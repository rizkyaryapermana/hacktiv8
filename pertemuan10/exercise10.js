// Exercise ke 2

const dataDiri = {
  nama_depan: "Faridz",
  nama_belakang: "Putra",
  hobi: ["Futsal", "Sepak bola"],
  angka_favorit: 19,
  memakai_kacamata: false,
};
 console.log(dataDiri);
 const namaLengkap = dataDiri.nama_depan + " " + dataDiri.nama_belakang;
 console.log("Nama Lengkap", namaLengkap);
 dataDiri["angka_favorit"] = 8;
 console.log("Hasil angka favorit terbaru", dataDiri["angka_favorit"]);

 // Exercise ke 4
function cekAngka(angka) {
  if (typeof angka != "number") {
    return "Anda memasukkan bukan angka";
  } else {
    if (angka % 2 == 0) {
       return "angka Genap";
     } else if (angka % 2 == 1) {
      return "Angka ganjil";
    }
  }
 }

 const angka = cekAngka("1");
 console.log(angka);
