# Student Management API

A backend REST API built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project demonstrates backend development concepts including:

- Express server setup
- MVC architecture
- MongoDB database integration
- Mongoose schemas and models
- CRUD operations
- Request validation
- Error handling
- Filtering
- Sorting
- Pagination
- Authentication (JWT + bcrypt) _(coming soon)_

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose ODM

### Tools

- Postman (API testing)
- Git & GitHub

---

# Project Structure

```
student-management-api/

│
├── controllers/
│   └── student.controller.js
│
├── models/
│   └── student.model.js
│
├── routes/
│   └── student.routes.js
│
├── middleware/
│   └── logger.middleware.js
│
├── config/
│   └── database.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd student-management-api
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Do not commit `.env` to GitHub.

---

# Running the Project

Start the server:

```bash
npm start
```

or:

```bash
node index.js
```

Server runs on:

```
http://localhost:8000
```

---

# API Endpoints

## Get All Students

### Request

```
GET /students
```

Response:

```json
{
  "success": true,
  "students": []
}
```

---

# Filtering

Filter students by age:

```
GET /students?age=22
```

Filter by gender:

```
GET /students?gender=male
```

Multiple filters:

```
GET /students?age=22&gender=male
```

---

# Sorting

Sort ascending:

```
GET /students?sort=age
```

Sort descending:

```
GET /students?sort=-age
```

Default sorting:

```
createdAt descending
```

(Newest students first)

---

# Pagination

Use page and limit:

```
GET /students?page=2&limit=10
```

Example:

```
page=1
students 1-10

page=2
students 11-20
```

---

# Get Student By ID

```
GET /students/:id
```

Example:

```
GET /students/65abc123
```

---

# Create Student

```
POST /students
```

Body:

```json
{
  "name": "Vinay",
  "email": "vinay@gmail.com",
  "age": 22,
  "gender": "male"
}
```

---

# Update Student

```
PATCH /students/:id
```

Body:

```json
{
  "age": 23
}
```

---

# Delete Student

```
DELETE /students/:id
```

---

# Validation

The API handles:

- Required fields
- Email uniqueness
- Data type validation
- Age validation
- Enum validation

Example:

Invalid:

```json
{
  "name": "a"
}
```

Response:

```json
{
  "success": false,
  "message": "Validation error"
}
```

---

# Error Handling

The API handles:

- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

Example:

```json
{
  "success": false,
  "message": "Student not found"
}
```

---

# Security Practices

Implemented:

- Environment variables
- No database credentials in code
- `.gitignore` for sensitive files
- Input validation

---

# Future Improvements

Planned features:

- JWT Authentication
- bcrypt password hashing
- User management
- Role based authorization
- File uploads
- Deployment

---

# Learning Purpose

This project was built to understand backend development fundamentals and follows industry practices like:

- MVC architecture
- Separation of concerns
- Clean folder structure
- REST API design

---

# Author

Vinay Kumar
