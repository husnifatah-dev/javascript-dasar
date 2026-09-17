# 03 - Operator JavaScript

Modul ini membahas tentang operator di JavaScript yang digunakan untuk memanipulasi nilai, melakukan perhitungan matematika, penugasan nilai, perbandingan, hingga logika kondisi.

---

## 1. Operator Aritmatika

Digunakan untuk melakukan operasi matematika dasar.

| Operator | Deskripsi | Contoh | Hasil (`x = 10, y = 3`) |
| :---: | :--- | :--- | :--- |
| `+` | Penjumlahan | `x + y` | `13` |
| `-` | Pengurangan | `x - y` | `7` |
| `*` | Perkalian | `x * y` | `30` |
| `/` | Pembagian | `x / y` | `3.333...` |
| `%` | Modulus (Sisa Bagi) | `x % y` | `1` |
| `**` | Eksponen (Pangkat) | `x ** y` | `1000` |
| `++` | Increment (Tambah 1) | `x++` | `11` |
| `--` | Decrement (Kurang 1) | `x--` | `9` |

---

## 2. Operator Penugasan (Assignment)

Digunakan untuk memberikan atau mengubah nilai ke dalam variabel.

| Operator | Contoh | Sama Dengan |
| :---: | :--- | :--- |
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 4` | `x = x * 4` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 3` | `x = x % 3` |

---

## 3. Operator Perbandingan (Komparasi)

Digunakan untuk membandingkan dua nilai dan menghasilkan nilai boolean (`true` atau `false`).

| Operator | Deskripsi | Contoh | Hasil |
| :---: | :--- | :--- | :--- |
| `==` | Sama dengan (hanya cek nilai) | `'5' == 5` | `true` |
| `===` | Identik / Strict Equality (cek nilai & tipe data) | `'5' === 5` | `false` |
| `!=` | Tidak sama dengan | `5 != 3` | `true` |
| `!==` | Tidak identik / Strict Inequality | `'5' !== 5` | `true` |
| `>` | Lebih besar dari | `10 > 5` | `true` |
| `<` | Lebih kecil dari | `3 < 2` | `false` |
| `>=` | Lebih besar atau sama dengan | `5 >= 5` | `true` |
| `<=` | Lebih kecil atau sama dengan | `4 <= 2` | `false` |

> **Best Practice:** Selalu gunakan `===` dan `!==` untuk menghindari *bug* pemaksaan tipe data (*type coercion*).

---

## 4. Operator Logika

Digunakan untuk menggabungkan satu atau lebih kondisi boolean.

| Operator | Nama | Deskripsi | Contoh | Hasil |
| :---: | :--- | :--- | :--- | :--- |
| `&&` | AND | Bernilai `true` jika **semua** kondisi bernilai `true` | `true && false` | `false` |
| `\|\|` | OR | Bernilai `true` jika **salah satu** kondisi bernilai `true` | `true \|\| false` | `true` |
| `!` | NOT | Membalikkan nilai boolean (`true` jadi `false`, dan sebaliknya) | `!true` | `false` |