import Fish from "../../../../models/Fish";
import db from "../../../../utils/db";

export default async function handler(req, res){
    await db.connect()

    switch(req.method){
        case "GET": {
            const fish = await Fish.findById(req.query.id)
            return res.status(200).json(fish)
        }
    }
}
