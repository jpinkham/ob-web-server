const loginAuditTrailSchema = require('./loginAuditTrail');
const extendSchema = require('../../helpers/extendSchema')

module.exports = extendSchema(loginAuditTrailSchema, {
    loginResult: {
        type: String,
        enum: ['SUCCEEDED', 'FAILED']
    }
});