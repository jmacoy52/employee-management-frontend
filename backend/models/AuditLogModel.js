const db = require('../config/db'); // adjust path as needed

const AuditLogModel = {
    // Create a new audit log entry
    create: (action, performed_by, details, callback) => {
        const sql = 'INSERT INTO audit_log (action, performed_by, details) VALUES (?, ?, ?)';
        db.query(sql, [action, performed_by, details], callback);
    },

    // Get all audit log entries
    getAll: (callback) => {
        const sql = 'SELECT * FROM audit_log ORDER BY timestamp DESC';
        db.query(sql, callback);
    },

    // Get audit log by ID
    getById: (id, callback) => {
        const sql = 'SELECT * FROM audit_log WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = AuditLogModel;
