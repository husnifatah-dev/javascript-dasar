// ==========================================
// 03-perbandingan.js
// Praktik Komparasi (Strict vs Loose) & Logika
// ==========================================

let angka = 10;
let teksAngka = "10";

console.log("=== PERBANDINGAN LOOSE VS STRICT ====");  
// Loose equality (==) akan mengabaikan tipe data
console.log("10 == '10' :", angka == teksAngka); // true

// Strict rquility (===) akan mengecek nilai DAN tipe datanya
console.log("10 === '10' :", angka === teksAngka) // false
console.log("10 !== '10' :", angka !== teksAngka); // true

console.log("\n=== OPERATOR RELASIONAL ===");
console.log("10 > 5 :", angka > 5); // true
console.log("10 <= 10 :", angka <= 10); // true

console.log("\n=== OPERATOR LOGIKA ===");
let umur = 20;
let punyaKTP = true;

// operator AND (&&), jika ingin menghasilkan true maka kedua nilai harus true
let melamarKerja = umur >= 17 && punyaKTP;
console.log("Boleh melamar kerja (&&):", melamarKerja); // true

// operator OR (||), cukup salah satunya saja yang true maka optputnya true
let diskonPelajar = false;
let diskonMember = true;
let dapatDiskon = diskonPelajar || diskonMember;
console.log("Dapat diskon (||) :", dapatDiskon); // true

// operator NOT (!), mengembalikan kondisi
let isMalam = false;
let isSiang = !isMalam;

console.log("Apakah ini siang? :", isSiang); // true 