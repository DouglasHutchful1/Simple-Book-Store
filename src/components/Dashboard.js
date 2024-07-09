import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
    const [books, setbooks] = useState([]);
    const [searchterm, setsearchterm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:5001/api/books')
            .then(response => response.json())
            .then(data => setbooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const handleSearch = (event) => {
        setsearchterm(event.target.value);
    };

    const handleAddBook = () => {
        navigate('../addbook');
    };

    const handleUpdateBook = (book) => {
        navigate('../updatebook/:id', { state: { book } }); 
    };

    const handleDeleteBook = (id) => {
        fetch(`https://localhost:5001/api/books/${id}`, { method: 'DELETE' })
            .then(() => setbooks(books.filter(book => book.id !== id)))
            .catch(error => console.error('Error deleting book:', error));
    };

    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchterm.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchterm}
                    onChange={handleSearch}
                />
            </div>
            <button className="add-book-button" onClick={handleAddBook}>
                Add New Book
            </button>
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="book-item">
                        <h3>{book.name}</h3>
                        <p><strong>Category:</strong> {book.category}</p>
                        <p><strong>Price:</strong> ${book.price}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                        <button className="btn btn-warning" onClick={() => handleUpdateBook(book)}>Update</button>
                        <button className="btn btn-danger" onClick={() => handleDeleteBook(book.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
