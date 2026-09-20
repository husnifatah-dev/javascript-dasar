// ==========================================
// 02-switch-case.js
// Praktik Percabangan switch...case
// ==========================================

let hari = "kAmis ";

console.log("=== JADWAL AKTIVITAS HARI ===");

switch (hari.toLowerCase()) {
    case "senin":
        console.log("Hari Senin: Upacara dan meeting mingguan tim.");
        break;
    case "Selasa":
    case "rabu":
    case "kamis":
        console.log("Hari Kerja: Fokus pengerjaan modul dan tugas.");
        break;
    case "jumat":
        consoel.log("Hari Jumat: Evaluasi mingguan dan persiapan weekend.");
        break;
    case "sabtu":
    case "minggu":
        console.log("Hari Libur: Istirahat dan bersantai.");
        break;
    default:
        console.log("Nama hari tidak valid!");
}