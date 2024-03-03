import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Library() {
	const [books, setBooks] = useState([]);

	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		loadData();
	}, []);

	let loadData = async () => {
		setLoading(true);
		let books = await axios.get("https://64118e936a69ae754520bddf.mockapi.io/books");
		setBooks(books.data);
		setLoading(false);
	};

	let bookDelete = async (id) => {
		try {
			let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
			if (ask) {
				await axios.delete(`https://64118e936a69ae754520bddf.mockapi.io/books/${id}`);
			}
			loadData();
		} catch (error) {
			console.log(error);
		}
	};

	

	

	return (
		<>
			<div className="container">
				<div className="my-5 text-center">
					<Link to="/AddBook" className="sf-button">
						Add Book
					</Link>
				</div>
				{isLoading ? (
					<span> Loading . . .</span>
				) : (
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Books Details</h6>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>S.No</th>
											<th>Book Name</th>
											<th>Author</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{books.map((book, index) => {
											return (
												<tr>
													<td>{index + 1}</td>
													<td>{book.name}</td>
													<td>{book.author}</td>
													<td>₹{book.Price}</td>
													<td>{book.quantity}</td>
													
													<div>
														<td>
															<Link to={`/library/${book.id}`} className="btn btn-sm btn-warning mx-2">
																View
															</Link>

															<Link to={`/library/edit/${book.id}`} className="btn btn-sm btn-primary mx-2">
																Edit
															</Link>

															<button
																onClick={() => {
																	bookDelete(book.id);
																}}
																className="btn btn-sm btn-danger mr-2"
															>
																Delete
															</button>
														</td>
													</div>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>
			
		</>
	);
}

export default Library;