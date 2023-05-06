import Fish from "../../../../models/Fish";
import db from "../../../../utils/db";

export default async function handler(req, res){
    await db.connect()

    switch(req.method){
        case "GET": {
            const fishs = await Fish.find({}).limit(15)
            console.log(fishs)
            return res.status(200).json(fishs)
        }

        case "POST": {
            const fish = await Fish.create({...req.body})
            return res.status(201).json(fish)
        }
    }
}