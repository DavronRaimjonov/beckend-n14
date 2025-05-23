const { Router } = require("express");
const permissionChecker = require("../tools/permissionChecker");
const verifyToken = require("../tools/tokenVerification");
const {
  make_order,
  get_order,
  delete_order,
} = require("../controller/orderController");
const router = Router();

router.get("/get-order", permissionChecker, verifyToken, get_order);
router.post("/make-order", permissionChecker, verifyToken, make_order);
router.delete("/delete-order", permissionChecker, delete_order);

module.exports = router;
