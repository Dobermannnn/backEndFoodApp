const controller = require("../controllers/user");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.listUsers);
router.get("/:id", cacheNoStore, controller.getUser);

module.exports = router;
