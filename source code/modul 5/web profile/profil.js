// Menyeleksi elemen
const ubahDeskripsiBtn = document.getElementById('ubahDeskripsiBtn');
const paragrafDeskripsi = document.getElementById('deskripsi');

ubahDeskripsiBtn.addEventListener('click', function() {
    paragrafDeskripsi.textContent = 'Ini adalah deskripsi baru yang diubah secara dinamis menggunakan JavaScript! Keren, bukan?';
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const container = document.getElementById('container');

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
});
