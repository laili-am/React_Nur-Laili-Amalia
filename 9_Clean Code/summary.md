- Clean Code adalah istilah dari sintaks atau code yang mudah untuk dibaca, dipahami, dan diubah oleh programmer. Clean code tidak selalu berbentuk code yang dapat berjalan dengan baik, yang terpenting mudah dibaca dan dipahami.
- Kenapa clean code
1. Work Collaboration
2. Feature Development
3. Faster Development
- Karakteristik Clean Code
1. Mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Food function
8. Gunakan konvensi
9. Formatting
- Cara melakukan formatting yang baik
1. Lebar baris code 80-120 karakter
2. Satu class 300-500 baris
3. Baris code yang berhubungan saling berdekatan
4. Dekatkan fungsi dengan pemanggilnya
5. Deklarasi variabel berdekatan dengan penggunanya
6. Perhatikan indentasi
7. Menggunakan prettier atau formatter
- Prinsip clean code
1. Keep it so simple (KISS)
Hindari membuat fungsi yang dibuat untuk melakukan a, sekaligus memodifikasi B, mengecek fungsi C, dst
2. Don’t Repeat Yourself (DRY)
Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code,buatlah fungsi yang dapat digunakan secara berulang-ulang. 
- Tips untuk selalu KISS
1. Fungsi atau class harus kecil
2. Fungsi dibuat untuk melakukan satu tugas saja
3. Jangan gunakan terlalu banyak argumen pada fungsi
4. Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal
- Teknik Refactoring 
1. Membuat sebuah abstraksi 
2. Memecah kode dengan fungsi/class
3. Perbaiki penamaan dan lokasi kode
4. sDeteksi kode yang memiliki duplikasi
