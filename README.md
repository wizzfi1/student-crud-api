# Student CRUD API with MongoDB

A RESTful API for managing student records with MongoDB.

## Features

- Create, read, update, and delete student records
- Get count of all students
- Pagination and filtering support
- Input validation
- Error handling

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start MongoDB server
4. Start the application: `npm run dev`

## API Endpoints

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | /students          | Get all students               |
| POST   | /students          | Create a new student           |
| GET    | /students/:id      | Get a single student           |
| PUT    | /students/:id      | Update a student               |
| DELETE | /students/:id      | Delete a student               |
| GET    | /students/count    | Get count of all students      |

## Bonus Features

- Pagination: `/students?page=1&limit=10`
- Filtering: `/students?lastName=Smith`

## Postman Collection

Import the Postman collection from `Student-CRUD-API.postman_collection.json` to test the API endpoints.