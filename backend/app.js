import express from "express";
import cors from "cors"


const app = express();


app.use(
    cors({
        origin: "*", //lo pueden manipular todos
        credentials: true,
    })
)

app.use(express.json());

export default app;

