import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from './routes/sturoutes.js'
import Dbconnection from "./Dbconfig/dbConfig.js";
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 6000;
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/data", routes);
app.listen(port, () => {
    console.log(`server started on port ${port}`);

})