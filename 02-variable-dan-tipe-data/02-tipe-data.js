// ==========================================
// 02-tipe-data.js
// Tipe Data Primitif dan Operator typeof
// ==========================================

// 1. String
const namaLengkap = "Erling Haaland";
const pesan = "Selamat datang di kelas JS!";

console.log("Halo", namaLengkap, "-", pesan);

// 2. Number
const umur = 25;
const IPK = 3.85;

console.log("Umur saya adalah:", umur, "tahun", "| Saya memiliki IPK:", IPK);

// 3. Boolean
const isStudent = true;
const hasGraduated = false;

console.log("Apakah anda mahasiswa?", isStudent);
console.log("Apakah anda sudah lulus?", hasGraduated);

// 4. Null dan Undefined
let dataKosong = null; // Sengaja dikosongkan
let dataBelumDiisi;    // Bernilai undefined karena belum di assign

console.log("Nilai null:", dataKosong);
console.log("Nilai undefined:", dataBelumDiisi);

// 5. Mengecek tipe data dengan operator `typeof`
console.log("=== Pemeriksaan Tipe Data ===");
console.log("typeof namaLengkap :", typeof namaLengkap); // string
console.log("typeof umur:", typeof umur); // number
console.log("typeof isStudent:", typeof isStudent); // boolean
console.log("typeof dataKosong:", typeof dataKosong); // object (bug bersjaah di JS)
console.log("typeof dataBelumDiisi:", typeof dataBelumDiisi); // undefined