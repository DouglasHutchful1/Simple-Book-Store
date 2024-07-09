import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addbook.css';

const AddBook = () => {
    const [book, setBook] = useState({
        name: '',
        category: '',
        price: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:5001/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });

            if (response.ok) {
                // Navigate to the dashboard after successful book addition
                navigate('/dashboard');
            } else {
                // Handle error
                alert('Failed to add book');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book');
        }
    };

    return (
        <div className="add-book-container">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Book Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={book.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        value={book.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        value={book.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={book.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
