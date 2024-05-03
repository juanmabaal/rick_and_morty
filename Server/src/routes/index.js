const express = require('express');
const  router = express.Router();

const { getCharById } = require("../controllers/getCharById");
const { postUser } = require('../controllers/postUser');
const { postFav } = require('../controllers/postFav');
const { login } = require('../controllers/login');
const { deleteFav } = require('../controllers/deleteFav');
// const {postFav, deleteFav } = require("../controllers/NOhandleFavorites");

// const login = require("../controllers/login");

router.get("/character/:id", getCharById);

// router.get("/login", login);

// router.delete('/fav/:id', deleteFav);
// router.post('/fav', postFav);

router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav);

module.exports = router;