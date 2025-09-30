import axios from "axios";

// server component for sign in.
export default async function useSignin( username : string , password : string) {
    console.log(username, password)
    const BASE_URL = 'http://localhost:3001/signin'
    const res = await axios.post(`${BASE_URL}`, {
        name: username ,
        password: password
    })
    return res;
}   