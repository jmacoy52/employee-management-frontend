const express = require('express');
const router = express.Router();
const AuditLogController = require('../controllers/AuditLogController');
//const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// defined routes Only admins can view audit logs
router.get('/', authenticateToken, authorizeAdmin, AuditLogController.getAllAuditLogs);


// Not for public use — for testing only
// In the actual app, logs will be inserted automatically inside other controllers
router.post('/',  authenticateToken, authorizeAdmin, AuditLogController.insertAuditLog);

module.exports = router;
