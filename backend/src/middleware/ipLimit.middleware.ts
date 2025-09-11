import { Request, Response, NextFunction } from "express"
import { db } from "../utils/db.js"

export async function registrationIpLimit(req: Request, res: Response, next: NextFunction){
    const ip = req.ip

    try{
        const result = await db.query("SELECT COUNT(*) FROM users WHERE last_ip = $1", [ip])
        const count = Number(result.rows[0].count)

        if(count >= 10){
            return res.status(429).json({ error: "This IP has reached the registration limit." })
        }

        next()
    }catch(err){
        return res.status(500).json({ error: "Server error checking IP limit." })
    }
}