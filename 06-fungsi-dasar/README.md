# 06 - Fungsi Dasar (Basic Functions)

Modul ini membahas tentang fungsi (function) di JavaScript. Fungsi adalah sekumpulan blok kode yang dibungkus untuk melakukan tugas spesifik dan dapat dipanggil berulang kali (menerapkan prinsip *reusability*).

1. Mendefinisikan Fungsi
Ada dua cara utama untuk membuat fungsi dasar di JavaScript:

A. Function Declaration
Cara standar membuat fungsi menggunakan kata kunci function diikuti nama fungsinya.
function sapa() {
  console.log("Halo, selamat pagi!");
}

B. Function Expression
Menyimpan fungsi ke dalam sebuah variabel. Fungsi ini bisa dibuat tanpa nama (dikenal sebagai Anonymous Function).
const sapa = function() {
  console.log("Halo, selamat pagi!");
};

2. Parameter dan Argumen
Fungsi dapat menerima input data agar lebih dinamis.

- Parameter: Variabel penampung yang ditulis saat fungsi dibuat.

- Argumen: Nilai asli yang dikirim saat fungsi dipanggil.

// 'nama' adalah parameter
function sapaUser(nama) { 
  console.log("Halo " + nama);
}

// 'Husni' adalah argumen
sapaUser("Husni");

3. Mengembalikan Nilai (return)
Secara default, fungsi tidak menghasilkan nilai apa-apa (hanya menjalankan baris kode). Agar fungsi dapat menghasilkan suatu nilai yang bisa disimpan atau diolah lagi, gunakan kata kunci return.

Ketika program mengeksekusi return, fungsi akan langsung berhenti, dan nilai di sebelah kanannya akan dikembalikan.

function kaliDua(angka) {
  return angka * 2;
}

let hasil = kaliDua(5); // hasil bernilai 10

4. Lingkup Variabel (Scope)
Scope menentukan di mana sebuah variabel bisa diakses.

- Global Scope: Variabel yang dibuat di luar fungsi. Bisa diakses dari mana saja (bahkan dari dalam fungsi).

- Local / Function Scope: Variabel yang dibuat di dalam sebuah fungsi (menggunakan let atau const). Variabel ini hanya bisa diakses di dalam fungsi itu saja dan tidak akan bocor ke luar.