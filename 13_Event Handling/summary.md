# 13_Event Handling

*  State  adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. Pada state, data bisa dimodifikasi jika menggunakana setState, dan setiap terjadi modifikasi, akan terjadi render ulang. State sendiri bersifat asynkronus dan dipakai didalam class.
* Stateless component
1. Tidak tau tentang aplikasi
2. Tidak melakukan data fetching (pengambilan data)
3. Tujuan utamanya adalah visualisasi 
4. Dapat digunakan kembali
5. Hanya berkomunikasi dengan induk langsungnya
* Stateful component 
1. Mengerti aplikasi 
2. Melakukan data fetching (pengambilan data)
3. Berinteraksi dengan aplikasi
4. Tidak dapat digunakan kembali
5. Meneruskan status dan data ke anak-anaknya
* Handling Event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen.
*  Event  Adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.
* Contoh list event
1. Clipboard events (promise terpenuhi)
2. Form events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)

