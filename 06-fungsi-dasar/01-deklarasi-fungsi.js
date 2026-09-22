// ==========================================
// 01-deklarasi-fungsi.js
// Praktik Function Declaration & Expression
// ==========================================

// 1. Fuction Declaration
// Praktik Function Declaration & Expression
function tampilkanPesan() {
    console.log("Belajar JavaScript Dasar sangat menyenangkan!");
}

// Memanggil/menjalankan fungsi declaration
tampilkanPesan();
tampilkanPesan(); // fungsi bisa dipanggil berkali-kali dan hasilnya juga akan sama

console.log("=====================");

// 2. Function Expression
// Fungsi disimpan di dalam variable (sering menggunakan const)
const infoKampus = function () {
    console.log("Mahasiswa Sistem Informasi - Universitas Terbuka");
};

// Memanggil funsgi expression (caranya sama dengan declaration)
infoKampus();