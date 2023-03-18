# Resume Materi React Hooks
## React Hooks 
React hooks merupakan sebuah fitur baru pada react. Adanya react hooks dapat memudahkan kita dalam menggunakan state dan fitur react yang lain tanpa menuliskan sebuah kelas. 
Beberapa hooks yang ada pada react :
Hooks Dasar 

- useState
- useEffect
- useContext

Hooks Tambahan
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Terdapat beberapa aturan saat menggunakan react hooks yaitu :
1. Hanya panggil hooks di tingkat atas
2. Jangan memanggil hooks dari dalam loops, conditions, atau nested functions
3. Hanya panggil hooks dari fungsi-fungsi react
4. Jangan memanggil hooks dari fungsi-fungsi javascript biasa

## Use State dan Use Effect
- useState => `const [name, setName]= useState()` akan mengembalikan nilai dari state (pada contoh diatas: name) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setName). Dengan menggunakan useState code yang kita tuliskan akan menjadi lebih singkat. Untuk menggunakannya juga harus mengimport useState sebelum digunakan. 
- useEffect memungkinkan kita melakukan efek samping (side effects) di dalam function component. useEffect terdapat dua jenis yaitu yang butuh pembersihan (cleanup) dan ada yang tidak butuh pembersihan. 

## Custom React Hooks
Kita dapat membuat atau customisasi react hooks sesuai yang kita inginkan. Contohnya seperti membuat custom hook untuk melakukan resize component pada halaman yang kita buat, dimana fungsi ini dapat kita ekstrak sehingga tidak perlu menuliskan berulang kali untuk setiap komponen di halaman yang ada.
