import express from "express";
import { getUsersByGender } from "../../controllers/userDetails/userDetails";

const router = express.Router();

router.get("/get_userList", getUsersByGender);


module.exports = router;
