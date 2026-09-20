# 04 - Pengkondisian & Kontrol Logika

Modul ini membahas cara mengontrol alur eksekusi program berdasarkan kondisi tertentu (*Control Flow*) menggunakan `if...else`, `switch...case`, serta memahami konsep *Truthy* dan *Falsy* pada JavaScript.

---

## 1. Blok `if`, `else if`, dan `else`

Digunakan untuk menjalankan blok kode tertentu ketika suatu kondisi terpenuhi (`true`).

```javascript
if (kondisi1) {
  // Dieksekusi jika kondisi1 bernilai true
} else if (kondisi2) {
  // Dieksekusi jika kondisi1 false dan kondisi2 true
} else {
  // Dieksekusi jika semua kondisi di atas false
}