module.exports = (app) => {
    let router = require('express').Router();
    const authController = require('../controllers/auth.controller');
    router.post('/login', authController.login);
    router.post('/refresh', authController.refresh);
    router.post('/logout', authController.logout);
    app.use('/auth', router);
}