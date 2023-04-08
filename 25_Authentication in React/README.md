# Resume Authentication in React

- Authorization yaitu proses memberikan atau membatasi hak akses pengguna ke fitur pada aplikasi. Sehingga pengguna tidak bebas dalam mengakses aplikasi, contohnya jika role admin maka dapat mengakses banyak fitur dibanding hanya user.
- Authentication yaitu proses mengidentifikasi pengguna dengan memvalidasi identitas yang mereka miliki, contohnya email dan password. Jika ternyata identitas mereka valid makan akan diberikan akses ke aplikasi. Contoh dari autentikasi yaitu login.

- Keja dari authentication pada umumnya, user mengirimkan username dan password dengan method post. Lalu akan dilakukan authentikasi dan akan membuat jwt string yang bersifat rahasia dan mengembalikan berupa JwtRespon yang berisikan token dll. Untuk lebih lengkapnya bisa di liat pada gambar berikut:

##### ![Auth work](https://res.cloudinary.com/practicaldev/image/fetch/s--pDTt0xJr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://bezkoder.com/wp-content/uploads/2020/03/react-jwt-authentication-flow.png)
