const gamesController = {};

import gamesModel from "../models/Games.js";

//SELECT
gamesController.getGames = async(req, res) =>{
    const games = await gamesModel.find();

    res.json(games)
}

//INSERT
gamesController.postGames = async(req, res) =>{
    const{name, category, maxBet, minBet, isVerified } = req.body;
    const newGame = new gamesModel({name, category, maxBet, minBet, isVerified })
    await newGame.save()

    res.json({message: "game saved"})
}

//DELETE
gamesController.deleteGames = async(req,res) =>{
    await gamesModel.findByIdAndDelete(req.params.id)

    res.json({message: "game deleted"})
}

//UPDATE
gamesController.putGames = async(req, res)=>{
    const{name, category, maxBet, minBet, isVerified  } = req.body;
    const updateGames = await gamesModel.findByIdAndUpdate(req.params.id, {name, category, maxBet, minBet, isVerified }, {new: true})

    res.json({message: "game updated successfully"})
}

export default gamesController;