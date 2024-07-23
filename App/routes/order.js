const controller = require("../controllers/order");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/userId/:id", cacheNoStore, controller.getOrdersByUser);
router.post("/", cacheNoStore, controller.addOrder);
router.get("/getFoods/:id", cacheNoStore, controller.getFoodsFromOrder);
router.get("/topRestaurants", cacheNoStore, controller.getTopRestaurants);
router.get("/bestThemes", cacheNoStore, controller.getBestThemes);
router.get("/favoriteRestaurantsOfUser/:id", cacheNoStore, controller.getFavoriteOfUser);



module.exports = router;
