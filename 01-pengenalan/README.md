# 01 - Pengenalan JavaScript

Modul ini membahas konsep dasar JavaScript, cara menjalankannya, aturan penulisan kode (sintaks), serta cara menampilkan output.

1. Cara Menjalankan JavaScript
Ada dua cara utama untuk menjalankan kode JavaScript:

A. Browser Console
Setiap peramban web (seperti Chrome, Firefox, Edge) memiliki Developer Tools bawaan.

Buka browser, tekan tombol F12 atau Ctrl + Shift + I (Cmd + Option + I di Mac).

Pilih tab Console.

Ketik perintah JavaScript (misal: console.log("Halo World")) lalu tekan Enter.

B. Node.js (Terminal / Command Prompt)
Node.js memungkinkan JavaScript berjalan di luar browser (sisi server/komputer lokal).

Pastikan Node.js sudah terinstal di komputer.

Buka terminal/VS Code Terminal di direktori file JavaScript Anda.

Jalankan perintah:

node nama_file.js

2. Sintaks Dasar dan Komentar
Komentar digunakan untuk memberi catatan pada kode dan tidak akan dieksekusi oleh mesin JavaScript.

Single-line Comment
Gunakan tanda dua garis miring (//) untuk komentar satu baris.

// Ini adalah komentar satu baris
Multi-line Comment
Gunakan tanda /* ... */ untuk komentar yang mencakup lebih dari satu baris.

/*
  Ini adalah komentar
  beberapa baris (multi-line)
*/

3. Mencetak Output: console.log()
Fungsi console.log() digunakan untuk menampilkan pesan, data, atau nilai variabel ke dalam terminal / browser console. Ini sangat berguna untuk pengujian dan proses debugging.

Contoh Sintaks:

console.log("Halo, dunia!");
console.log(100);