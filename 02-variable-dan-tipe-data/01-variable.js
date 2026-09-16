// ==========================================
// 01-variabel.js
// Deklarasi dan Karakteristik Variabel (var, let, const)
// ==========================================

// 1. Penggunaan `let` Nilai yang dapat diubah / Reassignable.
let name = "Budi";
console.log("Nama awal:", nama);

nama = "Budi Santoso"; //Reassignment
console.log("Nama setelah diubah:", nama);

// 2. Penggunaan `const` (Nilai tetap / Constant)
const phi = 3.14
console.log("Nilai Phi:", phi);

// Untuk pengecekan bisa uncomment code dibawah ini maka akan meneyababkan TypeError: Assignmenet to constant variable.
// phi = 3.141559

// 3. Penggunaan `var` Nilai yang bisa diubah juga sama seperti variable let, namun ini adalah cara lama (ES5). Sebaiknya dihindari karena berisiko menimbulkan bug variabel bocor (hoisting).

// 4. Aturan penamaan camelCase
let totalHargaPembelian = 150000;
let isUserLogin = true;

console.log("Total Harga:", totalHargaPembelian);
console.log("Status Login:", isUserLogin);