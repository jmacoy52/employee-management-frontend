const db = require('../config/db');

class AuditLogModel {
  // Get all audit logs (newest first)
  static getAllLogs(callback) {
    const query = 'SELECT * FROM audit_logs ORDER BY created_at DESC';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

  // Insert a new audit log (created_at handled by DB)
  static insertLog(logData, callback) {
    const query = `
      INSERT INTO audit_logs (UserId, actions, descriptions)
      VALUES (?, ?, ?)
    `;
    const values = [
      logData.UserId,
      logData.actions,
      logData.descriptions
    ];
    db.query(query, values, callback);
  }

  // Get logs by user ID (to filter logs per user if needed)
  static getLogsByUserId(userId, callback) {
    const query = 'SELECT * FROM audit_logs WHERE UserId = ? ORDER BY created_at DESC';
    db.query(query, [userId], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
}
  
module.exports = AuditLogModel;
