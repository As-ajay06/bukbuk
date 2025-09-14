import express from "express"
import { signinUserSchema, UserSchema, createRoomSchema } from "@repo/common/zodSchema"
import { PrismaClient } from "../../../packages/database/generated/prisma"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import authentication from "./middlewares/auth";
const prisma = new PrismaClient();

// things to push in jwttoken
// .env file
const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
    // send the data to the database
    const parsed = UserSchema.safeParse(req.body)
    if (!parsed.success) {
        res.json({
            error: parsed.error,
            message: "Incorrect inputs"
        })
        return;
    }

    const { email, password, name } = parsed.data;

    // @ts-ignore
    try {
        const existing = await prisma.user.findFirst({ where: { email } })
        if (existing) {
            return res.json({
                message: "user already exits"
            })
        } else {
            await prisma.user.create({
                // check this type error
                // todo hash the password
                data: { email, password, name }
            })
            // compare the hashed password here then allow the user to send the json
            res.json({
                "messesge": "You are signed up"
            })

        }

    } catch (error) {
        console.log("error occured during checking", error)
    }

})
app.post("/signin", async (req, res) => {
    // sign up endpoint

    const parsed = signinUserSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error })
    }

    const { name, password } = parsed.data;

    const userFound = await prisma.user.findFirst({ where: { name, password } })
    if (!userFound) {
        return res.status(500).json({
            error: "Sorry! invalid inputs"
        })
    } else {
        const userId = userFound.id
        const token = jwt.sign({ username: name, userId: userId }, JWT_SECRET)
        res.json({
            token: token
        })
    }
})

//may be this is not the right way to do

app.post("/room", authentication, async (req, res) => {
    // send the data to the database

    const parsedData = createRoomSchema.safeParse(req.body)
    if (!parsedData.success) {
        res.json({
            error: "Incorrect inputs"
        })
    }


    const userId = req.userId;

    // use try catch
    const room = await prisma.room.create({
        data: {
            //@ts-ignore
            slug: parsedData.data?.name,
            adminId: userId
        }
    })

    res.json({
        roomId: room.id
    })
})


// app.post("/chat_room", (req, res) => {
//     // send the data to the database
//     res.send("hi there")
// })

// todo : add one more routes for the user to come and see the existing message

app.listen(3001, () => {
    console.log("http server started")
})


