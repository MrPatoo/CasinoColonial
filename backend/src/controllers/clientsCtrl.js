const clientsController = {};

import clientsModel from "../models/Clients.js";

//SELECT
clientsController.getClients = async(req, res) =>{
    const clients = await clientsModel.find();

    res.json(clients)
}

//INSERT
clientsController.postClients = async(req, res) =>{
    const{name, email, password, age, country, isVerified } = req.body;
    const newClient = new clientsModel({name, email, password, age, country, isVerified})
    await newClient.save()

    res.json({message: "Client saved"})
}

//DELETE
clientsController.deleteClients = async(req,res) =>{
    await clientsModel.findByIdAndDelete(req.params.id)

    res.json({message: "Client deleted"})
}

//UPDATE
clientsController.putClients = async(req, res)=>{
    const{name, email, password, age, country, isVerified } = req.body;
    const updateClients = await clientsModel.findByIdAndUpdate(req.params.id, {name, email, password, age, country, isVerified}, {new: true})

    res.json({message: "Client updated successfully"})
}

export default clientsController;