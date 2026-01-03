import express from "express"
import authMiddleware from "../middleware/authentication.js";
import { uploadPhoto } from "../controllers/photoController.js"

const router = express.Router();

router.post("/upload-photo", authMiddleware, uploadPhoto);

export default router
