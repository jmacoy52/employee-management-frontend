const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

class UserController {
  // Register new user
  static async register(req, res) {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    UserModel.findUserByEmail(email, async (err, existingUser) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      console.log('Checking for email:', email);
      if (existingUser) return res.status(409).json({ error: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = { username, email, password: hashedPassword };
      UserModel.registerUser(newUser, (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to register user' });
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
      });
    });
  }

  // Login user
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    UserModel.findUserByEmail(email, async (err, user) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      res.status(200).json({ message: 'Login successful', token });
    });
  }
}

module.exports = UserController;
