# 05 - Perulangan (Looping)

Modul ini membahas konsep iterasi atau perulangan dalam JavaScript. Perulangan sangat penting untuk menerapkan prinsip **DRY (*Don't Repeat Yourself*)**, yaitu menghindari penulisan kode yang sama berulang-ulang.

1. Konsep for Loop
Gunakan for loop ketika kamu sudah tahu pasti berapa kali perulangan harus dilakukan (misalnya mengulang 10 kali, atau menelusuri data dari awal hingga akhir).

Sintaks:
for (inisialisasi; kondisi; increment/decrement) {
  // Blok kode yang akan diulang
}

- Inisialisasi: Menyiapkan variabel penghitung awal (contoh: let i = 1).

- Kondisi: Perulangan akan terus berjalan selama kondisi ini bernilai true (contoh: i <= 5).

- Increment/Decrement: Mengubah nilai penghitung setelah satu iterasi selesai (contoh: i++ untuk tambah 1, i-- untuk kurang 1).

2. Konsep while dan do...while Loop
while Loop
Gunakan while loop ketika jumlah perulangan belum pasti dan hanya bergantung pada suatu kondisi. Kondisi akan dievaluasi sebelum blok kode dijalankan.

Sintaks:
while (kondisi) {
  // Kode akan dijalankan selama kondisi bernilai true
  // Wajib menyertakan pengubah kondisi agar tidak terjadi Infinite Loop!
}

do...while Loop
Hampir sama dengan while, namun evaluasi kondisi dilakukan di akhir. Ini memastikan blok kode dieksekusi minimal 1 kali, meskipun kondisinya sejak awal sudah bernilai false.

Sintaks:
do {
  // Kode dijalankan minimal 1 kali
} while (kondisi);

3. Kapan Menggunakan for vs while?
Pilih for: Jika kamu memiliki batas awal dan batas akhir yang jelas. (Contoh: Menampilkan angka 1 sampai 100).

Pilih while: Jika perulangan bergantung pada faktor eksternal atau kondisi dinamis yang batas akhirnya tidak diketahui pasti. (Contoh: Menunggu input pengguna sampai bernilai benar, atau memproses data sampai habis).

4. Mengontrol Perulangan: break & continue
break: Perintah untuk menghentikan seluruh perulangan secara paksa, dan keluar dari blok loop tersebut.

continue: Perintah untuk melompati/melewati iterasi saat ini, dan langsung melanjutkan ke iterasi perulangan berikutnya.



