console.log("--- Latihan Variabel dan Operator ---");
const nama = "Andi Wijaya";
let umur = 21;
let nilaiMatematika = 85;
let nilaiFisika = 92;

// Melakukan operasi aritmatika
let nilaiRataRata = (nilaiMatematika + nilaiFisika) / 2;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Nilai Rata-rata:", nilaiRataRata);

console.log("\n--- Latihan Percabangan ---");
let predikat;

if (nilaiRataRata > 90) {
    predikat = "Sangat Memuaskan";
} else if (nilaiRataRata > 80) {
    predikat = "Memuaskan";
} else {
    predikat = "Cukup";
}

console.log("Predikat Kelulusan:", predikat);

console.log("\n--- Latihan Perulangan ---");
console.log("Mencetak bilangan ganjil dari 1 sampai 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { // Cek jika sisa bagi dengan 2 bukan 0
        console.log(i);
    }
}
console.log("\n--- Latihan Fungsi dan Array ---");
const daftarHobi = ["Membaca Buku", "Bermain Gitar", "Olahraga"];

// Fungsi untuk menampilkan semua hobi
function tampilkanHobi(hobiArray) {
    console.log("Daftar Hobi:");
    for (let i = 0; i < hobiArray.length; i++) {
        console.log("- " + hobiArray[i]);
    }
}

// Panggil fungsi dengan array sebagai argumen
tampilkanHobi(daftarHobi);

// Menambah hobi baru dan menampilkan lagi
daftarHobi.push("Menulis");
console.log("\nSetelah menambah hobi baru:");
tampilkanHobi(daftarHobi);