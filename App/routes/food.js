const controller = require("../controllers/food");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/restId/id", cacheNoStore, controller.getFoodOfRest);
router.get("/foodId/:id", cacheNoStore, controller.getFoodById);

module.exports = router;
