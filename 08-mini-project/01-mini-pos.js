// ==========================================
// 01-mini-pos.js
// Mini Project: Sistem Kasir Warung HXH
// ==========================================

// 1. DATABASE MENU (Array of Object)
const daftarMenu = [
    { id: 1, nama: "Nasi Goreng Spesial", harga: 15000 },
    { id: 2, nama: "Mie Tek-Tek Kuah", harga: 12000 },
    { id: 3, nama: "Ayam Penyet", harga: 18000 },
    { id: 4, nama: "Es Teh Manis", harga: 4000 },
    { id: 5, nama: "Es Jeruk", harga: 5000 },
    { id: 6, nama: "Kopi Hitam", harga: 5000 }
];

// 2. KERANJANG PESANAN (Array Kosong)
let keranjang = [];

// 3. FUNGSI: Menampilkan Menu
function tampilkanMenu() {
    console.log("===============================");
    console.log("       MENU WARUNG HXH         ");
    console.log("===============================");

    for (let i = 0; i < daftarMenu.length; i++) {
        let menu = daftarMenu[i];
        console.log(`${menu.id}, ${menu.nama} - Rp${menu.harga}`);
    }
    console.log("===============================\n");
}

// 4. FUNGSI: Menambah Pesanan ke Keranjang
function pesan(idMenu, porsi) {
    let menuDitemukan = null;

    // mencari menu berdasarkan ID menggunakan perulangan
    for (let i = 0; i < daftarMenu.length; i++) {
        if (daftarMenu[i].id === idMenu) {
            menuDitemukan = daftarMenu[i];
            break; // Hentikan pencarian jika sudah ketemu
        }
    }

    // Logika pengecekan (jika menu ada / tidak ada)
    if (menuDitemukan) {
        let subtotal = menuDitemukan.harga * porsi;

        // Memasukkan data pesanan ke dalam Array Keranjang
        keranjang.push({
            namaMenu: menuDitemukan.nama,
            hargaSatuan: menuDitemukan.harga,
            jumlah: porsi,
            total: subtotal,
        });

        console.log(`Berhasil menambahkan: ${porsi}, ${menuDitemukan.nama}`);
    } else {
        console.log(`Gagal: Menu dengan ID ${menu} tidak ditemukan!`);
    }
}

// 5. FUNGSI: Mencetak Struk Belanja
function cetakStruk() {
    console.log("\n=================================");
    console.log("       STRUK PEMBAYARAN        ");
    console.log("           WARUNG HXH          ");
    console.log("=================================");

    // Jika keranjang kosong
    if (keranjang.length === 0) {
        console.log("Belum ada pesanan.");
        console.log("==============================\n");
        return;
    }

    let totalHarga = 0;

    // Looping isi keranjang untuk cetak rincian dan hitung total
    for (let i = 0; i < keranjang.length; i++) {
        let item = keranjang[i];
        console.log(`${item.namaMenu}`);
        console.log(`${item.jumlah} x Rp${item.hargaSatuan} = Rp${item.total}`);

        // Tambahkan ke total keseluruhan
        totalHarga += item.total;
    }

    console.log("==================================");
    console.log(`TOTAL BAYAR : ${totalHarga}`);
    console.log("==================================");
    console.log("   TERIMA KASIH ATAS KUNJANGAN    ")
    console.log("               ANDA               ");
    console.log("==================================\n");

}

// ==========================================
// EKSEKUSI PROGRAM
// ==========================================

// 1. Kasir melihat menu
tampilkanMenu();

// 2. Pelanggan memesan makanan & minuman (arguman pertama untuk id menu dan kedua untuk jumalah yang dipesan berapa)
pesan(1, 2); 
pesan(4, 2);
pesan(3, 5);
pesan(6, 1);

// 3. Kasir mencetak struk
cetakStruk();
