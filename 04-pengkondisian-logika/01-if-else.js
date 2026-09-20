// ==========================================
// 01-if-else.js
// Praktik Percabangan if-else & Truthy/Falsy
// ==========================================

// 1. Contoh pada Kasus Penulaian Nilai Ujian 
let nilaiUjian = 85;

console.log("=== EVALUASI NILAI UJIAN ===");
if (nilaiUjian >= 90) {
    console.log("Predikat: A (sangat memuaskan)");
} else if (nilaiUjian >= 80) {
    console.log("Predikat: B (bagus)");
} else if (nilaiUjian >= 70) {
    console.log("Predikat: C (cukup)");
} else {
    console.log("Predikat: D (perlu diperbaiki)");
}

// 2. Evaluasi Truthy dan Falsy Value
console.log("\n=== DEMONSTRASI TRUTHY DAN FALSY ===");

let namaUser = ""; // string kosoong (falsy)

if (namaUser) {
    console.log(`Selamat datang, ${namaUser}!`);
} else {
    console.log("Pengguna belum memasukkan nama (NAMA KOSONG).");
}

let jumlahKeranjang = 3; // angka bukan 0 (truthy)

if (jumlahKeranjang) {
    console.log(`Anda memiliki ${jumlahKeranjang} barang di keranjang.`);
} else {
    console.log("Keranjang belanja anda KOSONG");
}