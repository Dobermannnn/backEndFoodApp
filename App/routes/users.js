const controller = require("../controllers/user");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.listUsers);
router.get("/userId/:id", cacheNoStore, controller.getUser);
router.post("/", cacheNoStore, controller.addUser);
module.exports = router;
