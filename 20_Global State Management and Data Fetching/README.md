# Resum Materi Global State Management

## Global State Management
Global State Management sesuai namanya yaitu management state global. Pada materi sebelumnya kita hanya mengenal state dan props yang mana bersifat local, dengan menggunakan global state kita dapat dengan mudah mengakses state tersebut diseluruh komponen dalam aplikasi.  


## Redux
Redux merupakan salah satu global state management yang populer. Dengan redux kita dapat mengakses state diseluruh komponen dengan mudah. Berikut gambaran jika kita tanpa redux dan mengggunakan redux:
##### ![Redux](https://camo.githubusercontent.com/7d167f2a2d7d724d06ca36427ea80bfe7654fe49e7d79769ba010cbd6db4e22b/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a3837644a35454233796444375f4162684b6234554f512e706e67)

sesuai gambar diatas jika kita tidak menggunakan redux kita harus mengakses ke komponent parent dan baru bisa diakses ke komponen childnya, sedangkan jika kita menggunakan redux kita dapat mengakses nya hanya dengan mengakses store yang bersifat global. 

## Redux
Redux memiliki libraries dan tools yaitu, React-redux, Redux toolkit, dan Redux DevTools Extention. 
Tedapat kompenen penting pada redux yaitu:
1. Actions, fungsi yang  untuk mengubah state pada store sesuai dengan aksi yang diterima. 
2. Reducer,  digunakan untuk menggambarkan perubahan yang ingin dilakukan pada state.
3. Store, sebuah objek untuk menyimpan seluruh state global.
