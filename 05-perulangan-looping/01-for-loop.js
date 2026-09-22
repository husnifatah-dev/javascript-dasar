// ==========================================
// 01-for-loop.js
// Praktik Perulangan for, break, dan continue
// ==========================================

// 1. Menggunakan for Loop untuk menghitung naik
console.log("=== MENGHITUNG 1 SAMPAI 5 ===");
for(let i = 1; i <= 5; i++) {
    console.log("Hitungan ke-", i);
}

// 2. Menggunakan for loop untuk menghitung mundur
console.log("\n=== MENGHITUNG MUNDUR ===");
for(let i = 5; i >= 1; i--) {
    console.log("Angka ke-", i);
}
console.log("Mulai!");

// 3. Menggunakan 'continue untuk melewati iterasi tertentu
// Kasus: Hanya mencetak angka ganjil, lewati angka genap
console.log("\n=== CETAK ANGKA GANJIL SAJA ===");
for(let i = 1; i <= 5; i++) {
    if(i % 2 === 0) {
        continue; // Jika angkanya genap akan di lewati
    }
    console.log("Angka Ganjil: ", i);
}

// 4. Menggunakan 'break' untuk mengehntikan loop sepenuhnya
// Kasus: Mencari barang, berhenti mencari jika sudah ditemukan
console.log("\n=== MENCARI BARANG ===");
let barangYangDicari = 3;

for(let kotak = 1; kotak <= 5; kotak++) {
    console.log("Membukan kotak ke-", kotak);

    if (kotak === barangYangDicari) {
        console.log("Barang ditemukan di kotak ke-" + kotak + "! Pencarian dihentikan.");
        break; // keluar dari loop sepenuhnya karena tujuan sudah tercapai.
    }
}