# 07 - Struktur Data Dasar (Array & Object)

Sejauh ini kita menyimpan satu nilai di dalam satu variabel. Namun dalam dunia nyata, kita sering kali perlu menyimpan banyak data sekaligus. Modul ini membahas dua struktur data dasar di JavaScript: **Array** dan **Object**.

1. Array.
Array adalah tipe data yang digunakan untuk menyimpan daftar nilai secara berurutan. Setiap nilai di dalam array disebut elemen, dan setiap elemen memiliki nomor urut yang disebut index.

Penting: Index pada array JavaScript (dan sebagian besar bahasa pemrograman) selalu dimulai dari 0, bukan 1.

A. Membuat Array
Gunakan tanda kurung siku [] dan pisahkan setiap nilai dengan koma.

let buah = ["Apel", "Jeruk", "Mangga"];

B. Mengakses dan Mengubah Elemen Array
Gunakan index di dalam tanda kurung siku untuk mengambil atau mengubah nilai elemen tertentu.

// Mengakses elemen pertama (index 0)
console.log(buah[0]); // Output: "Apel"

// Mengubah elemen kedua (index 1)
buah[1] = "Anggur";

(Catatan: Method array tingkat lanjut seperti map, filter, atau reduce akan dibahas pada materi JavaScript Menengah).

2. Object.
Jika Array menyimpan data secara berurutan menggunakan index angka, Object menyimpan data menggunakan pasangan nama dan nilai (Key-Value Pair). Object sangat cocok digunakan untuk menyimpan data yang mewakili satu entitas (misal: data diri seseorang, spesifikasi laptop, dll).

A. Membuat Object Literal
Gunakan tanda kurung kurawal {}. Di dalamnya, tuliskan key (properti) dan value (nilai) dipisahkan oleh titik dua :.

let mahasiswa = {
  nama: "Budi Santoso",
  jurusan: "Teknik Informatika",
  semester: 3
};

B. Mengakses Nilai Object
Ada dua cara untuk mengakses nilai di dalam object:

- Dot Notation (.): Cara paling umum dan ringkas.
console.log(mahasiswa.nama); // Output: "Budi Santoso"

- Bracket Notation ([]): Digunakan jika nama key mengandung spasi, atau jika nama key disimpan di dalam variabel lain.
console.log(mahasiswa["jurusan"]); // Output: "Teknik Informatika"
