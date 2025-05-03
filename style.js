const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const pesan = form.pesan.value.trim();

    if (nama === '' || email === '' || pesan === '') {
        alert('Semua field harus diisi!');
        return;
    }

    alert(`Terima kasih, ${nama}! Pesan kamu sudah dikirim.`);

    form.reset();
});

const submitButton = form.querySelector('input[type="submit"]');

submitButton.addEventListener('mousedown', function() {
    submitButton.style.transform = 'scale(0.95)';
});

submitButton.addEventListener('mouseup', function() {
    submitButton.style.transform = 'scale(1)';
});
