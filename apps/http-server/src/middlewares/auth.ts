import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export default function authentication(req: Request, res: Response, next: NextFunction) {

    // @ts-ignore
    const authoriation = req.headers["authorization"];
    if(authoriation){

        const foundUser = jwt.verify(authoriation, JWT_SECRET);
        if (foundUser === 'string') {
            return;
        }
        // @ts-ignore
        const userId = foundUser.userId
        req.userId = userId;
        next();
    }else {
        res.json({
            message:"you are not autohrized"
        })
    }
}