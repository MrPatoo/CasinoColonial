import express from "express";
import cors from "cors"


import clients from "./src/routes/clients.js"
import games from "./src/routes/games.js"


const app = express();


app.use(
    cors({
        origin: "*", //lo pueden manipular todos
        credentials: true,
    })
)

app.use(express.json());

//rutas
app.use("/api/clients", clients)
app.use("/api/games", games)


export default app;

