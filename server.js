const express =require("express")
const dotenv= require('dotenv')
const { OAuth2Client } = require("google-auth-library")
const e = require("express");

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const app = express();
app.use(express.json());
const users =[] ;
function upsert(array,item) {
    const i = array.findIndex((_item)=>_item.email==item.email);
    if(i>-1)array[i]=item;
    else array.push(item);
}
app.post('/api/google-login',async (req,res)=>{
    const {token }= req.body;
    const ticket = await client.verifyIdToken({
        audience:process.env.CLIENTID
    });
    const {name,email,picture}=ticket.getPayload();
    upsert(users,{name,email,picture});
    res.status(201);
    res.jason({name,email,picture}); 
})
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is ready at http://localhost:${process.env.PORT ||5000}`);
})