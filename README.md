# Simple-Book-Store-APP

This repository contains the source code for a Book Store application. The application is built with .NET Core for the backend and React for the frontend. It uses JWT for authentication and authorization, and all communications are secured using HTTPS with self-signed certificates.

# Table of Contents
Prerequisites
Setup
Backend Setup
Frontend Setup
Configuration
Usage
Project Structure
API Endpoints
JWT Authentication
HTTPS Configuration
CORS
Error Handling
Logging


# Prerequisites
.NET Core SDK
Node.js and npm
MySQL
A Web browser 

# Setup

# Clone the repository:

git clone https://github.com/DouglasHutchful1/Simple-Book-Store.git

cd book-store-app/BookStoreApi
Install .NET dependencies:
dotnet restore

# Set up the database:

Ensure you have MySQL running and create a database named BookStore. Update the connection string in appsettings.json as needed.

# Run the backend application:
dotnet run

It will start the backend server on https://localhost:5001.

# Frontend Setup
Navigate to the root directory:

# Install Node.js dependencies:

npm install
Start the React application:

npm start
It will start on http://localhost:3000.

# Configuration
Backend Configuration
The backend configuration is primarily located in appsettings.json. Key configurations include:

# Database Connection:
Update the ConnectionStrings:DefaultConnection with your MySQL database details.

# JWT Settings:
Update the Jwt section with your desired key, issuer, and audience.

# HTTPS Configuration:
Ensure your self-signed certificate details are correctly set up.

# Usage
Running the Application
Backend: Run dotnet run in the BookStoreApi directory.
Frontend: Run npm start in the root  directory.
# Adding a Book
To add a book, navigate to the add book page on the frontend and fill out the form. The form will make a POST request to the backend to save the book details in the database.

# Updating a Book
To update a book, click on the update button next to a book item on the dashboard. This will navigate to an update form pre-filled with the book details.

# Deleting a Book
To delete a book, click on the delete button next to a book item on the dashboard. This will send a DELETE request to the backend to remove the book from the database.

# Project Structure
Backend
Program.cs: Main entry point for the application.
Controllers/: Contains the API controllers.
Data/: Contains the DbContext and database models.
appsettings.json: Configuration file for the application.
Frontend
src/: Contains the React source code.
src/components/: Contains React components.
src/pages/: Contains page components.
src/styles/: Contains CSS files.
src/App.js: Main React component.
API Endpoints
Books
GET /api/books: Retrieve all books.
POST /api/books: Add a new book.
PUT /api/books/{id}: Update an existing book.
DELETE /api/books/{id}: Delete a book.
Authentication
POST /api/auth/login: Authenticate a user and return a JWT token.
JWT Authentication
The application uses JWT (JSON Web Token) for authentication and authorization. The token is generated upon user login and must be included in the Authorization header for protected API requests.


POST /api/auth/login
Content-Type: application/json

{
    "username": "doug",
    "password": "doug01"
}

GET /api/books
Authorization: Bearer <your-jwt-token>
# HTTPS Configuration
The backend server is configured to use HTTPS with a self-signed certificate. Ensure your local environment trusts the self-signed certificate.

# Trusting the Self-Signed Certificate
Run the following command to trust the self-signed certificate:
dotnet dev-certs https --trust
# CORS
CORS (Cross-Origin Resource Sharing) is configured to allow requests from http://localhost:3000. This configuration is set in the Program.cs file.

# Error Handling
The backend application includes basic error handling mechanisms. Unhandled exceptions are logged and appropriate HTTP responses are returned to the client.




