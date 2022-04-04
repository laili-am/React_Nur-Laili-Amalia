# 17_Testing

- Testing  adalah proses  memverifikasi bahwa test assertions dimana nilai true akan dikembalikan jika kode kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Fungsinya adalah kita akan mempunyai coverage yang baik pada aplikasi kita, jadi ketika ada perubahan dan menyebabkan bagian lain menjadi broken, akan lebih mudah utnuk diketahui. Selain itu, testing juga berfungsi untuk mengurangi bug pada aplikasi dengan mencegah beberapa hal yang berpotensi menjadi bug.

- Kategori testing pada react
1. Rendering component tress, pada environment test yang sudah disederhanakan dan ditegaskkan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes “end-to-end”.

- Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

- React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.


