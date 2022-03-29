# 15_React Form
- Form merupakan salah satu hal krusial dalam pengembangan suatu aplikasi website. Form sendiri digunakan untuk menghandle inputan dari user, kita dapat menemukan form pada saat kita melakukan login, mendaftarankan sesuatu, memberikan feedback, mengisi data, dan lain sebagainya. 

- Controlled Component merupakan sebuah elemen masukan form yang nilainya dikontrol oleh React

- Uncontrolled component adalah alternatif dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

- Terdapat 3 alasan mengapa validasi form diperlukan :
1. Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
2. Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
3. Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi


