import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
	const params = useParams();
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
			if (values.name === "") {
				errors.name = "Please enter name ";
			}
			if (values.author === "") {
				errors.author = "Please enter author name";
			}
			if (values.price === "") {
				errors.price = "Please enter price";
			}
			if (values.quantity === "") {
				errors.quantity = "Please enter department";
			}
			if (values.available === "") {
				errors.available = "Book is available enter true otherwise enter false";
			}
			return errors;
		},
		onSubmit: async (values) => {
			await axios.put(`https://64118e936a69ae754520bddf.mockapi.io/books/${params.id}`, values);

			navigate("/library");
		},
	});

	useEffect(() => {
		loadUser();
	}, []);

	let loadUser = async () => {
		try {
			let book = await axios.get(`https://64118e936a69ae754520bddf.mockapi.io/books/${params.id}`);
			formik.setValues({
				name: book.data.name,
				author: book.data.author,
				price: book.data.Price,
				quantity: book.data.quantity,
				available: book.data.available,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="container addbook m-auto p-0">
				<div className="row d-flex justify-content-center">
					<div className="section-title">
						<h1>EDIT BOOKS</h1>
					</div>
					<form className="w-50" onSubmit={formik.handleSubmit}>
						<label className="mb-2">Book Name</label>
						<input
							className={`form-control ${formik.errors.name ? `input-error` : ``}`}
							type={"text"}
							value={formik.values.name}
							onChange={formik.handleChange}
							name="name"
						/>
						<span style={{ color: "red" }}>{formik.errors.name}</span>
						<label className="mb-2">Author</label>
						<input
							className={`form-control ${formik.errors.author ? `input-error` : ``}`}
							type={"text"}
							value={formik.values.author}
							onChange={formik.handleChange}
							name="author"
						/>
						<span style={{ color: "red" }}>{formik.errors.author}</span>

						<label className="mb-2">Price</label>
						<input
							className={`form-control ${formik.errors.price ? `input-error` : ``}`}
							type={"text"}
							value={formik.values.price}
							onChange={formik.handleChange}
							name="price"
						/>
						<span style={{ color: "red" }}>{formik.errors.price}</span>

						<label className="mb-2">Quantity</label>
						<input
							className={`form-control ${formik.errors.quantity ? `input-error` : ``}`}
							type={"text"}
							value={formik.values.quantity}
							onChange={formik.handleChange}
							name="quantity"
						/>
						<span style={{ color: "red" }}>{formik.errors.quantity}</span>

						<label className="mb-2">Available</label>
						<input
							className={`form-control ${formik.errors.available ? `input-error` : ``}`}
							type={"text"}
							value={formik.values.available}
							onChange={formik.handleChange}
							name="available"
						/>
						<span style={{ color: "red" }}>{formik.errors.available}</span>
						<div className="mt-4 text-center">
							<input className="sf-button" type={"submit"} value="Submit" disabled={!formik.isValid} />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditBook;