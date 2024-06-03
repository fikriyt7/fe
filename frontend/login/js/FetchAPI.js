async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://0.tcp.ap.ngrok.io:12025/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Lakukan sesuatu dengan data balikan dari backend
            console.log(data);
            // Contoh: tampilkan pesan berhasil atau navigasi ke halaman berikutnya
        } else {
            // Tangani kesalahan saat melakukan permintaan ke backend
            console.error('Gagal melakukan login');
            // Contoh: tampilkan pesan error kepada pengguna
        }
    } catch (error) {
        // Tangani kesalahan saat melakukan permintaan fetch
        console.error('Error:', error);
        // Contoh: tampilkan pesan error kepada pengguna
    }
}
