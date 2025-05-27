/*fields: Games.
name, category, maxBet, minBet
*/

import { Schema, model } from "mongoose";

const gamesSchema = new Schema(
    {
       name: {
        type: String
       },
       category: {
        type: String
       },
       maxBet: {
        type: Number
       },
       minBet: {
        type: Number
       } 
    },{
        timestamps:true,
        strict: false
    }
)

export default model("games", gamesSchema)