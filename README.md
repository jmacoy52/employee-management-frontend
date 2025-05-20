# Employee Management System – Backend

This is the **backend API** for an Employee Management System. It provides secure and structured RESTful endpoints for managing users and employee data, with role-based access control.

The backend will be integrated with a frontend application later.

---

## 🚀 Key Features

- 🔐 JWT-based Authentication and Authorization
- 👥 Role Management (Admin, Employee)
- 📋 CRUD operations for Employee Records
- ✅ Input Validation using `express-validator`
- 🔒 Password Hashing using `bcryptjs`
- 🔁 RESTful API Architecture
- 🗂️ MVC Project Structure
- 🔐 Protected Routes for Sensitive Operations
- 🐘 MySQL Database Integration


## ⚙️ Technology Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (JSON Web Token)**
- **bcryptjs**
- **dotenv**
- **express-validator**

---

##  How to Set Up Locally

### 1. Clone the Repository

```bash
git clone https://github.com/jmacoy52/Employee-Management-System.git
cd employee-management-backend

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
💡 Update DB_* values to match your MySQL configuration.

4. Set Up the Database
Open MySQL and create the database manually:


CREATE DATABASE employee_db;
Run your migration script or use Sequelize/Knex if set up (if applicable).

5. Start the Server

npm run dev
The API will be running on http://localhost:5000.

🧪 API Testing
Use Postman or any REST client to test endpoints like:

POST /api/users/register – Register a new user

POST /api/users/login – Login user

GET /api/employees – Get employee list

POST /api/employees – Create new employee

PUT /api/employees/:id – Update employee

DELETE /api/employees/:id – Delete employee

📌 Notes
This is a backend-only project.

The frontend will be built and connected separately.

Ensure CORS is configured if testing with a frontend client.
