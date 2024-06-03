
    function confirmDelete() {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Anda tidak akan dapat mengembalikan data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // Di sini letakkan proses penghapusan data
                Swal.fire(
                    'Data dihapus!',
                    'Data telah berhasil dihapus.',
                    'success'
                );
            }
        });
    }
    function viewAdminDetail() {
        Swal.fire({
            title: 'Detail Informasi',
            html:
                `<div class="flex flex-col items-center bg-white-400 p-5 w-auto h-auto m-5 rounded shadow">
                    <img src="../assets/download.jpg" alt="Poto Profile" class="w-20 h-20 rounded-full mb-4">
                    <div class="text-center mb-4">
                        <strong class="font-bold ">Akun Terdaftar:</strong><br>1 Februari 2024 | 09:10:35
                    </div>
                    <div class="text-left mb-4 ">
                        <table class="table-auto mb-5 ">
                            <tr>
                                <td class="pr-2 border-b border-gray-300"><strong><i class="fas fa-user mr-2"></i>Nama Pengguna</strong></td>
                                <td class="border-b border-gray-300 font-bold">Budi A</td>
                            </tr>
                            <tr>
                                <td class="pr-2 border-b border-gray-300"><strong><i class="fas fa-envelope mr-2"></i>Email</strong></td>
                                <td class="border-b border-gray-300 font-bold">budi01@gmail.com</td>
                            </tr>
                            <tr>
                                <td class="pr-2 border-b border-gray-300"><strong> <i class="fas fa-map-marker-alt mr-2"></i>Alamat</strong></td>
                                <td class="border-b border-gray-300 font-bold">Jakarta Barat</td>
                            </tr>
                            <tr>
                                <td class="pr-2 "><strong><i class="fas fa-phone-alt mr-2"></i> Kontak</strong></td>
                                <td class="font-bold">0812 3445 6757</td>
                            </tr>
                        </table>
                    </div>
                </div>`,
            showCancelButton: true,
            cancelButtonText: 'Kembali',
            customClass: {
                container: 'swal2-overflow-auto',
                htmlContainer: 'swal2-overflow-hidden',
                popup: 'swal2-popup-custom',
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
            }
        });
    }
    
    function openAddAdminModal() {
        Swal.fire({
            title: 'Tambah Data Admin',
            html:
                `<div class="grid grid-cols-1 gap-4">
                    <div class="flex justify-center">
                        <label for="foto" class="cursor-pointer">
                            <div id="foto-container" class="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 shadow-md">
                                <i id="foto-icon" class="fas fa-user text-5xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                                <input id="foto" type="file" class="hidden" accept="image/*" onchange="previewFoto()">
                            </div>
                            <div class="text-center mt-2 text-gray-500 cursor-pointer"><i class="fas fa-edit"></i> Masukan Foto</div>
                        </label>
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <i class="fas fa-user text-gray-500 mr-2"></i>
                        <input id="nama" class="w-full bg-gray-100 focus:outline-none rounded-md px-3 py-2" placeholder="Tambahkan Nama">
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <i class="fas fa-envelope text-gray-500 mr-2"></i>
                        <input id="email" type="email" class="w-full bg-gray-100 focus:outline-none rounded-md px-3 py-2" placeholder="Masukkan Email">
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <i class="fas fa-lock text-gray-500 mr-2"></i>
                        <input id="password" type="password" class="w-full bg-gray-100 focus:outline-none rounded-md px-3 py-2" placeholder="Masukkan Kata Sandi">
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <i class="fas fa-lock text-gray-500 mr-2"></i>
                        <input id="confirm-password" type="password" class="w-full bg-gray-100 focus:outline-none rounded-md px-3 py-2" placeholder="Konfirmasi Kata Sandi">
                    </div>
                </div>`,
            showCancelButton: true,
            confirmButtonText: 'Tambah',
            cancelButtonText: 'Batal',
            focusConfirm: false,
            preConfirm: () => {
                const nama = Swal.getPopup().querySelector('#nama').value;
                const email = Swal.getPopup().querySelector('#email').value;
                const password = Swal.getPopup().querySelector('#password').value;
                const confirmPassword = Swal.getPopup().querySelector('#confirm-password').value;
                const foto = Swal.getPopup().querySelector('#foto').files[0];
                if (!nama || !email || !password || !confirmPassword) {
                    Swal.showValidationMessage('Semua kolom harus diisi');
                } else if (password !== confirmPassword) {
                    Swal.showValidationMessage('Kata sandi tidak cocok');
                } else {
                    return { nama, email, password, foto };
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append('nama', result.value.nama);
                formData.append('email', result.value.email);
                formData.append('password', result.value.password);
                formData.append('foto', result.value.foto);
    
                // Send formData to server
                fetch('/path/to/your/api', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire(
                            'Data Admin Ditambahkan!',
                            'Data admin telah berhasil ditambahkan.',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Gagal',
                            'Terjadi kesalahan saat menambahkan data admin.',
                            'error'
                        );
                    }
                })
                .catch(() => {
                    Swal.fire(
                        'Gagal',
                        'Terjadi kesalahan saat menambahkan data admin.',
                        'error'
                    );
                });
            }
        });
    }
    
    function previewFoto() {
        const fotoInput = document.getElementById('foto');
        const fotoContainer = document.getElementById('foto-container');
        const fotoIcon = document.getElementById('foto-icon');
    
        if (fotoInput.files && fotoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                fotoIcon.style.display = 'none';
                fotoContainer.style.backgroundImage = `url(${e.target.result})`;
                fotoContainer.style.backgroundSize = 'cover';
            }
            reader.readAsDataURL(fotoInput.files[0]);
        }
    }
    