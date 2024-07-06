const controller = require("../controllers/restaurant");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.allRestaurants);
router.get("/restId/:id", cacheNoStore, controller.getRestaurant);
router.get("/Theme/:theme", cacheNoStore, controller.getRestaurantByTheme);
router.post("/", cacheNoStore, controller.addRest);
router.get("/freeDelivery", cacheNoStore, controller.getFreeDelivery);

module.exports = router;
