import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());

app.listen(PORT, () => {
    console.log(`app is listen on port: ${PORT}`);
})