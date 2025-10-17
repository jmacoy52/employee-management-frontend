const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const db = require('../config/db');
<<<<<<< HEAD
const AuditLogModel = require('../models/AuditLogModel'); // Import the AuditLogModel

// Load environment variables
require('dotenv').config();
=======
const User = require('../models/userModel');
>>>>>>> frontend

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

class UserController {
  // Register new user
  static async register(req, res) {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Check if user already exists
      const existingUser = await UserModel.findUserByEmail(email);
      console.log('Checking for email:', email);
      if (existingUser) return res.status(409).json({ error: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = { username, email, password: hashedPassword, role };

      UserModel.registerUser(newUser, (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to register user' });

        // Log this action
        AuditLogModel.insertLog({
          UserId: result.insertId,
          actions: 'REGISTER',
          descriptions: `User ${username} registered with role ${role}`
        }, (logErr) => {
          if (logErr) console.error('Failed to insert audit log:', logErr);
        });

        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
      });

    } catch (err) {
      console.error('Error during registration:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  }

<<<<<<< HEAD
  // Delete employee
  static deleteUser(req, res) {
    const userId = req.params.id;

    UserModel.deleteUser(userId, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        return res.status(500).json({ error: 'Failed to delete user' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'user not found' });
      }

      // Log this action
      AuditLogModel.insertLog({
        UserId: req.user.id,
        actions: 'DELETE_USER',
        descriptions: `User ${userId} deleted by ${req.user.email}`
      }, (logErr) => {
        if (logErr) console.error('Failed to insert audit log:', logErr);
      });

      res.status(200).json({ message: 'user deleted successfully' });
=======
        // UPDATE an existing user role
  static updateUserRole(req, res) {
    const userId = req.params.id;
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }

    UserModel.updateUserRole(userId, { role }, (err, result) => {
      if (err) {
        console.error('Error updating user role:', err);
        return res.status(500).json({ error: 'Failed to update user role' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ message: 'User role updated successfully' });
>>>>>>> frontend
    });
  }


  // Login user
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    try {
      const user = await UserModel.findUserByEmail(email);
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      // Log this action
      AuditLogModel.insertLog({
        UserId: user.id,
        actions: 'LOGIN',
        descriptions: `User ${user.username} logged in`
      }, (logErr) => {
        if (logErr) console.error('Failed to insert audit log:', logErr);
      });

      res.status(200).json({ message: 'Login successful', token });

    } catch (err) {
      console.error('Login error:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  }
0
  static async getAllUsers(req, res) {
    db.query('SELECT id, username, email, role, created_at FROM users', (err, results) => {
      if (err) return res.status(500).json({ error: 'Server error' });

      //  Log this action
      AuditLogModel.insertLog({
        UserId: req.user.id,
        actions: 'VIEW_USERS',
        descriptions: `Admin ${req.user.email} fetched all users`
      }, (logErr) => {
        if (logErr) console.error('Failed to insert audit log:', logErr);
      });

      res.json(results);
    });
  }

    //Delete user
    static deleteUser(req, res) {
      const userId = req.params.id;

      User.deleteUser(userId, (err, result) => {
        if (err) {
          console.error('Error deleting user:', err);
          return res.status(500).json({ error: 'Failed to delete user' });
        }
    
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'User not found' });
        }

        else
        res.status(200).json({ message: 'User deleted successfully' });

      });
    }
}

module.exports = UserController;
