import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
const PORT = process.env.PORT || 3001

app.listen({PORT}, () => {
    console.log(`app is listen on port: ${PORT}`);
})