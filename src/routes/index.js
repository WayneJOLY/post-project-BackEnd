const express = require('express');
const routerPost = require('./post.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/posts",routerPost)

module.exports = router;