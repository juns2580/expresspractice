const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views','main.html'));
});

router.get('/test', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views','test.html'));
});

router.get('/redirect', (req, res, next) => {
    res.redirect('/');
});

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

module.exports = router;