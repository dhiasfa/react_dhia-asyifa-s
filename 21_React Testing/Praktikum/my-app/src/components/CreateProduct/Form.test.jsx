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
  it("should update product category on input change", () => {
    //render Form
    render(<Form />);
    const productCategoryInput = screen.getByLabelText("Product Category:");
    fireEvent.change(productCategoryInput, { target: { value: "Dress" } });
    expect(productCategoryInput.value).toBe("Dress");
  });
  it("should update image of product on input change", () => {
    //render Form
    render(<Form />);
    const productImageInput = screen.getByLabelText("Image of Product:");
    const file = new File(["imageProduct"], "imageProduct.png", {
      type: "image/png",
    });
    fireEvent.change(productImageInput, { target: { files: [file] } });

    // check if file is selected
    expect(productImageInput.files[0]).toStrictEqual(file);
  });
  it("should update product freshness on input change", () => {
    //render Form
    render(<Form />);
    const productFreshnessInput = screen.getByLabelText("Product Freshness:");
    fireEvent.change(productFreshnessInput, { target: { value: "Brand New" } });
    expect(productFreshnessInput.value).toBe("Brand New");
  });

  it("should update Additional Description on input change", () => {
    //render Form
    render(<Form />);
    const productDescriptionInput = screen.getByLabelText(
      "Additional Description:"
    );
    fireEvent.change(productDescriptionInput, {
      target: { value: "Cookies Enak" },
    });
    expect(productDescriptionInput.value).toBe("Cookies Enak");
  });

  it("should update Product Price on input change", () => {
    //render Form
    render(<Form />);
    const productPriceInput = screen.getByLabelText("Product Price:");
    fireEvent.change(productPriceInput, { target: { value: "10000" } });
    expect(productPriceInput.value).toBe("10000");
  });
});

describe("Test Prioritas 2", () => {
  it("should show error message when Product Name contains invalid characters", async () => {
    render(<Form />);
    const productNameInput = screen.getByLabelText("Product Name:");
    fireEvent.change(productNameInput, { target: { value: `~!@#$%^&*` } });
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Product Name tidak valid")).toBeInTheDocument();
    });
  });

  it("should show error message when Product Name exceeds 25 characters", async () => {
    render(<Form />);
    const productNameInput = screen.getByLabelText("Product Name:");
    fireEvent.change(productNameInput, {
      target: { value: "Cookiess Red Velvet Enakkk" },
    });
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("Product Name tidak boleh lebih dari 25 karakter")
      ).toBeInTheDocument();
    });
  });

  it("should show error messages when all form fields are empty", async () => {
    render(<Form />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Product Name is required")).toBeInTheDocument();
      expect(
        screen.getByText("Product Category is required")
      ).toBeInTheDocument();
      expect(screen.getByText("Product Image is required")).toBeInTheDocument();
      expect(
        screen.getByText("Product Freshness is required")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Product Description is required")
      ).toBeInTheDocument();
      expect(screen.getByText("Product Price is required")).toBeInTheDocument();
    });
  });
});
