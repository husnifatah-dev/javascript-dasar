// ==========================================
// 01-array-dasar.js
// Praktik Membuat, Mengakses, dan Mengubah Array
// ==========================================

// 1. Membuat Array (bisa berisi berbagai tipe data, namun disarankan seragam)
let daftarBahasa = ["JavaScript", "Python", "PHP", "Java"];
let nilaiUjian = [85, 90, 78, 92]

console.log("==== MENAMPILKAN ARRAY ====");
console.log("Daftar Bahasa Pemrograman:", daftarBahasa);
console.log("Total elemen daftarBahasa:", daftarBahasa.length);

// 2. Mengakses Elemen Array (PERLU DIINGAT: Index dimulai dari 0 bukan 1 ygy)
console.log("\n=== MENGAKSES ELEMEN ===");
console.log("Elemen pertama (index 0):", daftarBahasa[0]); // JavaScript
console.log("Elemen ketiga dari nilaiUjian:", nilaiUjian[2]); // 78

// Mengakses Nilai Elemen terkahir array
console.log("Elemen terkahir dari daftarBahasa:", daftarBahasa.at(-1)); // Java
// Secara dinamis:
let indexTerakhir = nilaiUjian.length - 1;
console.log("Elemen terkahir:", nilaiUjian[indexTerakhir]); // 92

// 3. Mengubah Nilai Elemen Array
console.log("\n=== MENGUBAH ELEMEN ===");
console.log("Sebelum diubah:", daftarBahasa[2]); // PHP

daftarBahasa[2] = "TypeScript";
console.log("Setelah diubah:", daftarBahasa[1]); //TypeScript
console.log("Array sekarang:", daftarBahasa);