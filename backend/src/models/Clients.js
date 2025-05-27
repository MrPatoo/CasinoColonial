/*fields: Games.
name, email, password, age, country
*/

import { Schema, model } from "mongoose";

const gamesSchema = new Schema(
    {
       name: {
        type: String
       },
       email:{
        type: String,
        unique: true,
        match:[
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/,
            "Por favor ingrese un correo electronico valido", //validar el correo electronico
        ],
    },
       password: {
        type: String

       },
       age: {
        type: Number
       },

       country: {
        type: String
       }
    },{
        timestamps:true,
        strict: false
    }
)

export default model("games", gamesSchema)