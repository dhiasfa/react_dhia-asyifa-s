# Resume Materi JavaScript Refreshment
## JavaScript
**Javascript** merupakan bahasa pemograman yang High-level, Untyped, dan interpreted. High-level memiliki artian bahasa pemograman yang mendekati bahasa yang mudah dipahami oleh menusia. Javascript juga tidak memerlukan deklarasi tipe data secara eksplisit atau biasa disebut untyped. Kode pada javascript tidak perlu dikompilasi dan kode tersebut akan dieksekusi langsung oleh interpreter yang ditargetkan.

## Var, Let, Const
`var` , `let`, dan `const` merupakan syntax untuk mendeklarasikan variabel. Saat ini untuk pendeklarasian variabel jarangan menggunakan `var` karena termasuk *hoisted* yang artinya `var` dapat digunakan meskipun belum dideklarasikan. Perbedaan `let` dan `const` yaitu, jika ingin merubah nilai dari suatu variabel dapat menggunakan `let` dan apabila nilai pada variabel ingin tidak bisa dirubah maka menggunakan deklarasi `const`. 
##### Untuk Perbedaan dari ketiga syntax tersebut dapat dilihat pada gambar berikut:
##### ![Grid](https://blog.xsis.academy/wp-content/uploads/2022/05/perbedaan.png)

## DOM javascript
DOM singkatan dari Document Object Model dengan menggunakan DOM kita dapat melakukan manipulasi pada dokumen HTML. Berikut beberapa syntax yang dapat digunakan untuk melakukan manipulasi pada HTML :

- `document.getElementById(id)` akan mengembalikan elemen `id`
- `document.querySelector(selector)` akan mengembalikan elemen pertama yang sesuai selector.
- `document.createElement(tagName)` untuk membuat elemen baru html
- `elemen.innerHTML="isi yang dirubah"` untuk mengubah isi pada elemen html
- `elemen.setAttribute(nama_atribut, nilai)` untuk menetapkan nilai atribut pada elemen html
