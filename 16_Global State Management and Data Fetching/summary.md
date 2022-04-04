# Global State Management

- Redux adalah library untuk manajemen state global yang menggunakan struktur "one-way data flow" dan menggunakan beberapa tipe code

- Saat yang tepat untuk menggunakan Redux
1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

- Redux Libraries dan Tools
1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

- Komponen Penting di Redux
1. Actions, digunakan untuk memberikan informasi dari aplikasi ke store
2. Reducer, pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
3. Store, objek sentral yang menyimpan state pada aplikasi

-  Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

- Cara-cara untuk melakukan fetching data di reach
1. Fetch API
2. Axios
3. React Query Library




