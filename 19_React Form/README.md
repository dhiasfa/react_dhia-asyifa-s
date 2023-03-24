# Resume React Form

## Form

Form merupakan hal yang penting atau krusial pada aplikasi web. Form sering dapat kita jumpai pada halaman web seperti saat akan login ataupun register akun .Form sendiri digunakan untuk menghandle input dari user. Terdapat banyak macam tipe element input pada form, diantaranya yaitu :

- input
- textarea
- radio button
- select
- checkbox
- button
- file

## Uncontrolled Components

Seperti namanya, uncontrolled components merupakan komponen yang tidak terkontrol. Dimana data pada form akan di handle oleh DOM-nya sendiri. Untuk mendapatkan nilai form dari DOM kita dapat menggunakan ref. 


```javascript
// Contoh menggunakan useRef
import React, { useRef } from "react";

export const Form = () => {
  const input = useRef(null);
  const handleSubmit = (e) => {
    alert("product name : " + input.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" ref={input} />
      </label>
      <button type="submit" value="kirim">
        Submit
      </button>
    </form>
  );
};

```
## Controlled Components
Kebalikan dari uncontrolled componets, controlled components dapat kita kontrol sesuai keinginan. Dimana controlled components untuk mendapatkan value pada form kita dapat menggunakan state pada react. Kelebihan dari controlled components yaitu dapat menonaktifkan tombol kecuali semua field terisi data yang valid. 
Berikut contoh penggunaan state `useState` pada form :
```javascript
// Contoh menggunakan useState
import React, { useState } from "react";

export const Form = () => {
  const [productName, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // jika field kosong maka akan muncul alert
    if (productName === "") {
      alert("ProductName is required");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" onChange={handleNameChange} value={productName} />
      </label>
      <button type="submit" value="kirim">
        Submit
      </button>
    </form>
  );
};

```