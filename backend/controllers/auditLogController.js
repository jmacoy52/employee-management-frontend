const AuditLogModel = require('../models/AuditLogModel');

class AuditLogController {
  //  Get all audit logs (admin only)
  static getAllAuditLogs(req, res) {
    AuditLogModel.getAllLogs((err, logs) => {
      if (err) {
        console.error('Error fetching audit logs:', err);
        return res.status(500).json({ error: 'Failed to fetch audit logs' });
      }
      res.status(200).json(logs);
    });
  }

  // Insert a log (system-internal use only, not exposed as a public route)
  static insertAuditLog(req, res) {
    const { UserId, actions, descriptions } = req.body;

    if (!UserId || !actions || !descriptions) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    AuditLogModel.insertLog({ UserId, actions, descriptions }, (err, result) => {
      if (err) {
        console.error('Error inserting audit log:', err);
        return res.status(500).json({ error: 'Failed to insert audit log' });
      }
      res.status(201).json({ message: 'Audit log created successfully', logId: result.insertId });
    });
  }
}

module.exports = AuditLogController;
