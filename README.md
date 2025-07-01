# 🎓 Student CRUD API (Node.js + Express + MongoDB)

A simple RESTful API for managing student records using **MongoDB**, **Express.js**, and **Node.js**. Includes validation, error handling, filtering, and pagination support.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete (CRUD) for students
- 📊 Get total student count
- ✉️ Email uniqueness validation
- ❗ Robust error handling (400, 404, 409)
- 🔎 Search by `lastName`
- 📃 Pagination support (`?page=1&limit=10`)
- 🔐 Environment config with `.env`

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose
- Postman (for API testing)

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-crud-api.git
cd student-crud-api

2. Install Dependencies

npm install

3. Create a .env File

In the root of the project:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/studentsDB?retryWrites=true&w=majority
PORT=5000

✅ Replace <username> and <password> with your MongoDB Atlas credentials

✅ URL-encode special characters in your password (e.g. @ → %40)

4. Start the Server

npm start

You should see:

MongoDB connected ✔️
Server running on port 5000

🧪 API Endpoints

| Method | Endpoint                                  | Description                  |
| ------ | ----------------------------------------- | ---------------------------- |
| POST   | `/students`                               | Create a new student         |
| GET    | `/students`                               | Get all students             |
| GET    | `/students?lastName=Smith&page=1&limit=5` | Filter & paginate results    |
| GET    | `/students/count`                         | Get total number of students |
| PUT    | `/students/:id`                           | Update student by ID         |
| DELETE | `/students/:id`                           | Delete student by ID         |


📬 Postman Collection

Import the included Student-CRUD.postman_collection.json into Postman:

1. Open Postman

2. Click Import

3. Choose Student-CRUD.postman_collection.json

4. Test all endpoints directly

✅ Example Request

POST /students

{
  "firstName": "Wisdom",
  "lastName": "Shaibu",
  "email": "shaibuwisdom@gmail.com",
  "age": 26
}

📌 Error Codes

| Status | Meaning                      |
| ------ | ---------------------------- |
| 400    | Bad Request (missing fields) |
| 404    | Not Found (invalid ID)       |
| 409    | Conflict (email exists)      |


💡 Bonus Features

-🔍 GET /students?lastName=Smith → filter by last name

-📃 GET /students?page=2&limit=10 → paginate results

📄 License

This project is open source under the MIT License.
