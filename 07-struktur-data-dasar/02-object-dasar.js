// ==========================================
// 02-object-dasar.js
// Praktik Membuat, Mengakses, dan Mengubah Object
// ==========================================

// 1. Membuat Object (key-value pair)
let profilUser = {
    username: "dev-pemula",
    email: "dec@example.com",
    isPremium: true,
    umur: 22,
};

console.log("=== MENAMPILKAN OBJECT ===");
console.log(profilUser);

// 2. Mengakses Nilai Object
console.log("\n=== MENGAKSES PROPERTI OBJECT ===");

//  Cara 1: dot notaion (disarankan untuk properti standar)
console.log("Username (DOT Notation):", profilUser.username);

// Cara 2: Bracket Notation (bermanfaat jika key dinamis atau ada spasi)
console.log("Email (Bracket Notation):", profilUser["email"]);

// 3. Mengubah dan Menambah Properti
console.log("\n=== MENGUBAH & MENAMBAH PROPERTI ===");

// Mengubah nilai properti yang sudah ada
profilUser.isPremium = false;
console.log("Status Premium baru:", profilUser.isPremium);

// Menambah properti baru ke dalam object
profilUser.role = "Administrator";
console.log("Properti role ditambahkan:", profilUser.role);

console.log("\nObject final setelah perubahan:");
console.log(profilUser);
