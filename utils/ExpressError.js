class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);       // ✅ MUST be first
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;