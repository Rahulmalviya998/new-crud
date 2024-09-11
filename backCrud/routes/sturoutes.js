import createStu from "../controllers/createStu.js";
import stumodel from "../model/student.js";
import express, { Router } from "express";
import storage from "../controllers/upload.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const upload = multer({ storage });


router.post('/create', upload.single('file'), createStu);

router.get('/getImage/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'uploads', filename);


    res.sendFile(filepath, (err) => {
        if (err) {
            console.log(err);
            res.status(404).send('File not found');
        }
    });
});

export default router;
