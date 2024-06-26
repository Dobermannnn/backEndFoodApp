const controller = require("../controllers/restaurant");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.allRestaurants);
router.get("/restId/:id", cacheNoStore, controller.getRestaurant);
router.post("/", cacheNoStore, controller.addRest);

module.exports = router;
