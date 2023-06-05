import React, { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { SearchBook } from './components/SearchBook';

export const SearchBooksPage = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

    useEffect(() => {
			const fetchBooks = async () => {
				const baseUrl: string = 'http://localhost:8080/api/books';
				const url: string = `${baseUrl}?page=0&size=5`;
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Response Error');
				}
				const responseJson = await response.json();
				const responseData = responseJson._embedded.books;
				const loadedBooks: BookModel[] = [];
				responseData.map((book: BookModel) => loadedBooks.push(book));
				setBooks(loadedBooks);
				setIsLoading(false);
			};
			fetchBooks().catch((error: any) => {
				setIsLoading(false);
				setHttpError(error.message);
			});
		}, []);

        if (isLoading) {
					return <SpinnerLoading />;
				}
				if (httpError) {
					return (
						<div className='container m-5'>
							<p>{httpError}</p>
						</div>
					);
				}

	return (
		<div>
			<div className='container'>
				<div>
					<div className='row mt-5'>
						<div className='col-6'>
							<div className='d-flex'>
								<input
									type='search'
									className='form-control me-2'
									placeholder='Search'
									aria-labelledby='Search'
								/>
								<button className='btn btn-outline-success'>Search</button>
							</div>
						</div>
						<div className='col-4'>
							<div className='dropdown'>
								<button
									type='button'
									className='btn btn-secondary dropdown-toggle'
									id='dropdownMenuButton1'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Category
								</button>
								<ul
									className='dropdown-menu'
									aria-labelledby='dropdownMenuButton1'>
									<li>
										<a href='#' className='dropdown-item'>
											All
										</a>
									</li>
									<li>
										<a href='#' className='dropdown-item'>
											Front End
										</a>
									</li>
									<li>
										<a href='#' className='dropdown-item'>
											Back End
										</a>
									</li>
									<li>
										<a href='#' className='dropdown-item'>
											Data
										</a>
									</li>
									<li>
										<a href='#' className='dropdown-item'>
											Dev Ops
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
                    <div className="mt-3">
                        <h5>Number of results: (22)</h5>
                    </div>
                    <p>
                        1 to 5 of 22 items:
                    </p>
                    {books.map(book=> (
                        <SearchBook book={book} key={book.id} />
                    ))}
				</div>
			</div>
		</div>
	);
};
