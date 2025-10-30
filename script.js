// Toggle menu untuk mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tombol "Tambah ke Chart"
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Motor telah ditambahkan ke Chart!');
  });
});

// Tombol "Buy Now" di mobile
const mobileBuy = document.querySelector('.mobile-buy');
mobileBuy.addEventListener('click', () => {
  alert('Pilih motor favoritmu dan segera checkout!');
});
