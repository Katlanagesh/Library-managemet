import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
function AddBook() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      price: "",
      quantity: "",
      available: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.id === "") {
        errors.id = "Please Enter Book Id";
      }
      if (values.name === "") {
        errors.name = "Please Enter Book Name";
      }
      if (values.author === "") {
        errors.author = "Please Enter Author Name";
      }
      if (values.price === "") {
        errors.price = "Please Enter Price";
      }
      if (values.quantity === "") {
        errors.quantity = "Please Enter Quantity of books ";
      }
      if (values.available === "") {
        errors.available = "Book is available, enter yes otherwise enter false";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let books = await axios.post(
        "https://64118e936a69ae754520bddf.mockapi.io/books",
        values
      );
      alert("Book Added");
      navigate("/library");
    },
  });
  return (
    <>
      <div className="container addbook m-auto p-0">
        <div className="row d-flex justify-content-center">
          <div className="section-title">
            <h1>ADD BOOKS</h1>
          </div>
          <form className="w-50" onSubmit={formik.handleSubmit}>
            <label className="mb-2">Book Name</label>
            <input
              className={`form-control ${
                formik.errors.name ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
            <p style={{ color: "red" }}>{formik.errors.name}</p>

            <label className="mb-2">Author Name</label>
            <input
              className={`form-control ${
                formik.errors.author ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.author}
              onChange={formik.handleChange}
              name="author"
            />
            <p style={{ color: "red" }}>{formik.errors.author}</p>

            <label className="mb-2">Price</label>
            <input
              className={`form-control ${
                formik.errors.price ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.price}
              onChange={formik.handleChange}
              name="price"
            />
            <p style={{ color: "red" }}>{formik.errors.price}</p>

            <label className="mb-2">Quantity</label>
            <input
              className={`form-control ${
                formik.errors.quantity ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.quantity}
              onChange={formik.handleChange}
              name="quantity"
            />
            <p style={{ color: "red" }}>{formik.errors.quantity}</p>

            <label className="mb-2">Available </label>
            <input
              className={`form-control ${
                formik.errors.available ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.available}
              onChange={formik.handleChange}
              name="available"
            />
            <p style={{ color: "red" }}>{formik.errors.available}</p>

            <div className="mt-4 text-center">
              <input
                className="sf-button"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddBook;
