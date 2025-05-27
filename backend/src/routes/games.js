import express from "express";
import gamesController from "../controllers/gamesCtrl.js";


const router = express.Router();

router.route("/")
.get(gamesController.getGames)
.post(gamesController.postGames)

router.route("/:id")
.put(gamesController.putGames)
.delete(gamesController.deleteGames)

export default router;
