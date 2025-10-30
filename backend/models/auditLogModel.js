const db = require('../config/db');

class AuditLogModel {
  // Get all logs (newest first)
  static getAllLogs(callback) {
    const query = 'SELECT * FROM audit_logs ORDER BY created_at DESC';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }



  // Insert a log
  static insertLog(logData, callback) {
    const query = `
      INSERT INTO audit_logs (userId, actions, descriptions)
      VALUES (?, ?, ?)
    `;
    const values = [
      logData.userId,      // Who did the action
      logData.actions,     // e.g., LOGIN, CREATE_EMPLOYEE
      logData.descriptions // Details
    ];
    db.query(query, values, callback);
  }
}

module.exports = AuditLogModel;
