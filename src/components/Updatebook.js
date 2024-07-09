// src/components/UpdateBook.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/updatebook.css';

const UpdateBook = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { book } = location.state || {};

    const [name, setName] = useState(book ? book.name : '');
    const [category, setCategory] = useState(book ? book.category : '');
    const [price, setPrice] = useState(book ? book.price : '');
    const [description, setDescription] = useState(book ? book.description : '');

    const handleUpdateBook = (event) => {
        event.preventDefault();
        fetch(`https://localhost:5001/api/books/${book.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, category, price, description }),
        })
        .then(response => response.json())
        .then(() => {
            navigate('/dashboard');
        })
        .catch(error => console.error('Error updating book:', error));
    };

    if (!book) {
        return <p>No book data available.</p>;
    }

    return (
        <div className="update-book-container">
            <h2>Update Book</h2>
            <form onSubmit={handleUpdateBook}>
                <div className="form-group">
                    <label>Book Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateBook;
