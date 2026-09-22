// ==========================================
// 02-parameter-return.js
// Praktik Parameter, Return Value, & Scope
// ==========================================

// 1. Parameter dan Argumen
// 'nama' dan 'program' adalah Parameter
function perkenalanPeserta(nama, program) {
    console.log(`Halo, nama saja ${nama}.`);
    console.log(`Saya saat ini sedang belajar ${program}`);
}

// 'Husni dan 'AI Fullstack Developer" adalah Argumen
perkenalanPeserta("Husni", "AI Fullstack Developer");

console.log("================");

// 2. Mengembalikan NIlai (Return)
function hitungLuasSegitiga(alas, tinggi) {
    let luas = 0.5 * alas * tinggi;
    return luas; // Mengembalikan hasil perhitungan ke luar fungsi
}

// Nilai yang dikembalikan (return) bisa disimpan ke dalam variable
let luasSegitigaPertama = hitungLuasSegitiga(10, 5);
console.log(`Luas segitiga adalah: ${luasSegitigaPertama}`); // 25

// Bisa juga langsung digunakan di dalam console.log
console.log(`Luas segitiga kedua: ${hitungLuasSegitiga(8, 4)}`); // 16

console.log("=================");

// 3. Lingkup Variable (Scope)
let variableGlobal = "Saya Global, bisa diakses dari mana saja.";

function cekScope() {
    let variableLokal = "Saya Lokal, hanya hidup di dalam fungsi ini.";

    console.log("Didalam fungsi");
    console.log(variableGlobal); // BEKERJA: Fungsi bisa akses variable luar
    console.log(variableLokal); // BEKERJA: Diakses di kandangnya sendiri
}

cekScope();
console.log("Di luar fungsi:");
console.log(variableGlobal); // Bekerja
// console.log(variableLokal); // Errorrr
