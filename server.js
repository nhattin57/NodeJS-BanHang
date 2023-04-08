
import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import {memberRouter,
    productRouter
} from './routes/index.js'
import checkToken from './authentication/auth.js'
import connect from './database/database.js'
import cors from 'cors'
const app = express()
app.use(cors({ origin: true }));
app.use(checkToken) //shield 
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('response from root router haha')
})

app.use('/member',memberRouter)
app.use('/product',productRouter)

const PORT = 8080 ?? 3005

app.listen(PORT, async() =>{
    await connect()
    console.log(`listening on port: ${PORT}`)
})
