import express from "express"
import "dotenv/config";
import cors from "cors";

const app = express()
app.use(cors()) // Enable Cross-Origin Resourse Sharing

app.get('/', (req, res)=> res.send("API is Working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running port ${PORT}`));