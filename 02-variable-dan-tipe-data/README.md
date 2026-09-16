# 02 - Variabel dan Tipe Data Primitif

Modul ini membahas cara menyimpan nilai di dalam memori menggunakan variabel serta jenis-jenis tipe data primitif yang tersedia di JavaScript.

---

## 1. Perbedaan `var`, `let`, dan `const`

JavaScript menyediakan tiga kata kunci (*keyword*) untuk mendeklarasikan variabel:

| Keyword | Re-declaration | Re-assignment | Scope | Catatan |
| :--- | :--- | :--- | :--- | :--- |
| `var` | Boleh | Boleh | Function Scope | Cara lama (ES5), berisiko terkena *hoisting* yang membingungkan. Sangat tidak disarankan. |
| `let` | Tidak Boleh | Boleh | Block Scope | Gunakan jika nilai variabel akan diubah di kemudian hari. |
| `const` | Tidak Boleh | Tidak Boleh | Block Scope | Gunakan untuk nilai tetap/konstanta. Wajib langsung diinisialisasi saat deklarasi. |

---

## 2. Aturan Penamaan Variabel (camelCase)

* **Gunakan format camelCase:** Kata pertama diawali huruf kecil, kata berikutnya diawali huruf kapital (contoh: `namaLengkap`, `totalHargaItem`).
* **Karakter awal:** Harus diawali huruf, tanda dolar (`$`), atau garis bawah (`_`). Tidak boleh diawali angka.
* **Sensitif huruf besar/kecil (*Case-sensitive*):** `umur` dan `Umur` dianggap dua variabel yang berbeda.
* **Reserved Keywords:** Tidak boleh menggunakan kata kunci bawaan JavaScript (seperti `let`, `function`, `if`, `return`).

---

## 3. Tipe Data Primitif

Tipe data primitif adalah tipe data mendasar di JavaScript yang hanya menyimpan nilai tunggal.

1. **String:** Data teks yang diapit tanda petik tunggal (`'...'`), petik ganda (`"..."`), atau backtick (`` `...` ``).
2. **Number:** Data angka bulat maupun desimal/floats (contoh: `25`, `3.14`).
3. **Boolean:** Nilai logika, hanya memiliki dua nilai: `true` (benar) atau `false` (salah).
4. **Null:** Representasi sengaja dari nilai kosong atau "tidak ada nilai".
5. **Undefined:** Variabel yang sudah dideklarasikan tetapi belum diberi nilai.

---

## 4. Mengecek Tipe Data: `typeof`

Operator `typeof` digunakan untuk memeriksa jenis tipe data dari suatu nilai atau variabel.

```javascript
console.log(typeof "Halo"); // "string"
console.log(typeof 42);     // "number"
console.log(typeof true);   // "boolean"
```