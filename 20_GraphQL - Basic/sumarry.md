# 20_Graph QL - Basic

- GraphQL adalah sebuah bahasa query untuk API, dan runtime dengan server-side yang digunakan untuk mengeksekusi query dengan menggunakan sistem yang telah ditetapkan untuk data. GraphQL akan meminimalkan jumlah data yang perlu ditransfer memalui jaringan. Dengan menggunakan GraphQL, kita dapat menggunakan single endpoint untuk setiap permintaan yang diperlukan.

- Terdapat 3 fitur utama dalam GraphQL
1. Query 
- Cara untuk mendapatkan data berdasarakan specific query yang didefinisikan.
-  Ketika menggunakan GraphQL kita dapat menentukan field apa saja yang kita perlukan. Selain itu, kita juga dapat multiple related dan urelated data sources. Kemudian terdapat fragmet yang merupakan potongan logic yang dapat digunakan di beberapa tempat sekaligus sehingga dapat difine sekali dan dapat digunakan di query yang lain jadi kita tidak perlu menulis berulang-ulang, hal ini tidak dapat dilakukan pada rest.
2. Mutation
- Cara untuk memanipulasi data, dapat memggunakan insert, update, delete data.
- Pada saat membuat mutation, wajib ada return. 
3. Subscription
- Cara mendapatkan update secara realtime atau based on events.

<br>

- Hasura merupakan layanan yang menyediakan GraphQL dan rest api.

- Heroku merupakan sebuah platform cloud yang digunakan sebagai layanan dalam mendukung beberapa bahasa pemrograman.

- Apollo client adalah manajemen state yang komprehensif pada library javascript yang memungkinkan untuk mengelola local dan remote data dengan GraphQL.



