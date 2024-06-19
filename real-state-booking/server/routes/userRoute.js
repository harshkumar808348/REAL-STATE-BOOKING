import express, { Router } from 'express';
import { allFav, bookVisit, cancelBookings, createUser, getAllBookings, toFav } from "../controllers/usercntrl.js";
import jwtCheck from '../config/auth0Config.js';
const router = express.Router();
 router.post("/register" ,jwtCheck, createUser);
 router.post("/bookVisit/:id",bookVisit);
 router.post("/allBookings" , getAllBookings);
 router.post("/removeBookings/:id",cancelBookings);
 router.post("/toFav/:rid",toFav);
 router.post("/allFav/" , allFav);

export {router as userRoute}