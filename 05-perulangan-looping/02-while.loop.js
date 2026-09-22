// ==========================================
// 02-while-loop.js
// Praktik Perulangan while dan do...while
// ==========================================

// 1. Praktik while loop dasar
console.log("=== WHILE LOOP ===");
let putaran = 1;

while (putaran <= 3) {
    console.log("Lari putaran ke-" + putaran);
    putaran++; // PENTING: Jangan lupa increment agar loop bisa berhenti
}
console.log("Selesai berlari!");

// 2. Praktik while loop dengan kondisi dinamis (pengurangan)
console.log("\n=== MENGHABISKAN SALDO ===");
let saldo = 50000;
let hargaKopi = 20000;
let jumlahKopi = 0;

// Loop akan terus berjalan selama saldo masih cukup untuk beli kopi
while (saldo >= hargaKopi) {
    saldo -= hargaKopi;
    jumlahKopi++;
    console.log("Beli kopi ke-" + jumlahKopi + ". Sisa saldo: Rp" + saldo);
}
console.log("Saldo tidak cukup untuk beli kopi lagi.");

// 3. Praktik do..while loop
console.log("\n=== DO..WHILE LOOP===");
let tebakan = 10;

// Meskipun kondisi tebakan < 5 adalah FALSE (karena 10 > 5),
// blok do tetep akan di jalankan satu kali.

do {
    console.log("Mengeksekusi tebakan dengan nilai: " + tebakan);
    tebakan++;
} while (tebakan < 5);

console.log("Loop do..while selesai.");