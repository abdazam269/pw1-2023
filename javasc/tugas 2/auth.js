function authenticate() {
    // password dan username 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // cek akun salah / benar
    if (username === 'Abdullahazzam' && password === 'student-nf23') {
        alert('Login Berhasil');
        // ke halaman selanjutnya
        window.location.href = 'success.html'; 
    } else {
        alert('Login gagal username atau password salah.');
    }
}
