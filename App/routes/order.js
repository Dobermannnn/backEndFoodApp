const controller = require("../controllers/order");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/userId/:id", cacheNoStore, controller.getOrdersByUser);

module.exports = router;
