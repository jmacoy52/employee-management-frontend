const db = require('../config/db');

class UserModel {
  static registerUser(userData, callback) {
    const query = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [userData.username, userData.email, userData.password, userData.role || 'user'];
    db.query(query, values, callback);
  }

  static findUserByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      callback(null, results[0]);
    });
  }
}

module.exports = UserModel;
