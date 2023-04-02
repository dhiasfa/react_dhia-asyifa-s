# Resume React Testing
- Testing merupakan proses memverifikasi bahwa test assertion kita benar dan code tetap berjalan sepanjang masa aplikasi. Testing cukup penting untuk dilakukan agar aplikasi yang kita buat dapat berjalan sesuai kebutuhan user dan membuat developer menjadi lebih percaya diri terhadap aplikasi yang dibuat. 
- Tipe - tipe Test : 
    
    - End to End (E2E)
    - Integration Testing
    - Unit Testing
    - Static Testing

- Terdapat library yang dapat digunakan untuk melakukan testing, contohnya menggunakan library vitest. Berikut salah satu kode test yang menggunakan vitest bahwa product name dapat menerima input text :
```javascript
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "./Form";

describe("Test Prioritas 1", () => {
  it("should update product name on input change", () => {
    //render Form
    render(<Form />);
    const productNameInput = screen.getByLabelText("Product Name:");
    fireEvent.change(productNameInput, { target: { value: "cook" } });
    expect(productNameInput.value).toBe("cook");
  });
});
```
