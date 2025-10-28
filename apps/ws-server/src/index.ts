
import { WebSocketServer } from "ws";
import WebSocket from "ws";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });
import { PrismaClient } from "../../../packages/database/generated/prisma";
import constants from "node:constants";

const prisma = new PrismaClient();

interface User {
    socket: WebSocket,
    rooms: string[],
    // @ts-ignore
    userId: userId
}


const users: User[] = [];

// store the userID , socket , room

// check if the user is authenticated
function checkUser(token: string): string | null {

    const decoded = jwt.verify(token, JWT_SECRET)

    if (typeof decoded == 'string') {
        return null;
    }
    // if decoded me userId nahi hai than return null
    if (decoded.userId) {
        return decoded.userId;
    }
    return null;
}

wss.on("connection", async (socket, request) => {
    // get the autorization token from the url
    // @ts-ignore
    const url = new URL(request.url, "ws://localhost");

    if (!url) {
        return;
    }
    //@ts-ignore
    const access_token = new URLSearchParams(url.search).get("access_token");
    //@ts-ignore
    const userId = checkUser(access_token);
    try {
        if (!userId) {
            // early return
            wss.close();
            return;
        }

        users.push({
            userId,
            rooms: [],
            socket
        })

    } catch (error) {
        socket.send(`error while authorizaiton : ${error}`)
    }

    // TODO if you can create this message app than it will not that hard to create gathertown by own ans adding video calling feature wiill be easy.
    // push all the chat to que than push to database
    socket.on("message", async (messeage) => {
        //  JOIN / MESSAGE
        try {
            const parsedMessage = JSON.parse(messeage as unknown as string);
            if (parsedMessage.type === 'JOIN') {
                // write the join login here
                // take the socket and let the user join the room
                try {
                    const user = users.find(x => x.socket === socket)
                    const userId = users.find(x => x.socket === socket)?.userId;
                    if (user) {
                        user.rooms.push(parsedMessage.roomId);

                        const id = {
                            userId : userId
                        }

                        socket.send(JSON.stringify(id).toString());
                        console.log(JSON.stringify(id).toString())
                    }
                    console.log("you can now send messages");
                } catch (error) {
                    socket.send("you are sending something wrong")
                }
            }

            // below this line there exits fault in the rooms behavour
            /*
            the faulty behaviour is people can send the message even if they are not joined to the room
            */
           
            if (parsedMessage.type === 'CHAT') {

                // todo: people cannot send chat if that socket is not JOIN in the server. 

                // get the userId from here , search in the in memory database
                const userId = users.find((user) => user.socket === socket)?.userId;
                console.log(userId);
                try {
                    const roomId = parsedMessage.roomId;
                    const message = parsedMessage.message;
                    users.forEach(user => {
                        if (user.rooms.includes(roomId)) {
                            const payload = {
                                message: message,
                                userId: userId
                            }
                            user.socket.send(JSON.stringify(payload).toString());
                        }
                    })
                } catch (error) {
                    socket.send(`${error}`)
                }
            }

            if (parsedMessage.type == "LEAVE") {

                // filter the room from the user
                try {
                    const currentUser = users.find((x) => x.socket === socket)
                    if (!currentUser) {
                        // disconnect the socket
                        wss.close();
                    } else {
                        currentUser.rooms = currentUser?.rooms.filter((room) => room != parsedMessage.roomId)
                    }
                    socket.send(`You leaved the room ${parsedMessage.roomId}`)

                } catch (err) {
                    socket.send(`${err}`)
                }

            }
        } catch (err) {
            socket.send(`{err}`)
        }
    })
}
)



// todo: 

/*
aurhentication logic
make this fully functional chat application
and add more features if you can
not storing chats in the database . And try to recreate this chat application one more time.
*/
