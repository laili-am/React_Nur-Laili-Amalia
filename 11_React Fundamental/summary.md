# 11_React Fundamental

- JSX atau javascript XML merupakan ekstensi syntax pada javascript yang disarankan di React karena dapat lebih menggambarkan apa yang seharusnya tampak pada User Interface, bentuk sintaks ini bukan berupa string maupun HTML. 
- Alasan menggunakan JSX karena JSX dibuat berdasarkan fakta atau logika rendering yang sangat terikat dengan logic UI.
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.
- Props atau properties berfungsi untuk membuat kita dapat memberikan argumen/data komponen dan membuat komponen menjadi lebih dinamis, props pada komponen tidak dapat diubah dan read-only.
- Lifecycle method
1. render()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillUnmount()
5. shouldComponentUpdate()
6. staticgetDerivedStateFromProps()
7. getSnapshotBeforeUpdate()
- Cara melakukan render bersyarat
1. Menggunakan if
2. Inline If dengan operator &&
3. Inline If-Else dengan ternary conditional operator
4. Mencegah komponen untuk rendering
- Render List digunakan untuk membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal {}.
- Key digunakan untuk membantu React dalam mengidentifikasi item mana yang telah diubah, ditambahkan, dan dihilangkan.
- Cara melakukan struktur direktori react
1. Pengelompokan berdasarkan fitur ata rute
2. Pengelompokan berdasarkan jenis file
- Cara styling
1. Classes dan CSS
2. Atribut Style
3. Modul CSS
