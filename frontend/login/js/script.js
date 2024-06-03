
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', login);
});

async function login(event) {
    event.preventDefault();

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
            console.log(data);
            // Redirect or perform any action upon successful login
        } else {
            console.error('Gagal melakukan login');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
