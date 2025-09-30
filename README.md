# Employee Management System – Backend (Switch To Frontend branch to View Homepage of the WebApp)

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
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the necessary environment variables for database connection, JWT secret, and port configuration. Refer to the code for the required variables.

### 4. Set Up the Database

Open MySQL and create the database manually:

```sql
CREATE DATABASE employee_db;
```

Run your migration script or use Sequelize/Knex if set up (if applicable).

### 5. Start the Server

```bash
npm run dev
```

The API will be running on your configured port.

---

## 📌 Notes

- This is a full-stack project with both backend and frontend components.
- The frontend is built with React and is located in the `client` directory.
- Ensure CORS is configured for frontend-backend communication.
