import express from 'express'
import {authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    logoutUser,
    // admin controller
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
    } from '../controllers/userControllers.js'
import { protect,admin } from '../middleware/authMiddleware.js';

const router = express.Router();

//route 1: POST method: authenticate /login
router.route('/login').post(authUser);
//route 2 : POST method: register
router.route('/').post(registerUser);
//route 3 : GET method : get user profile
router.get('/profile',protect,getUserProfile);
//route 4 : PUT Method : update user profile
router.put('/profile',protect,updateUserProfile);
//route 5: POST Method : logout
router.route('/logout').post(protect,logoutUser);


//admin routes
//route 6 : GET method : get users details
router.get('/',protect,admin,getUsers);
//route 7: GET method : get user detail by id
router.get('/:id',protect,admin,getUserByID);
//route 8: DELETE method : delete user by id
router.delete('/:id',protect,admin,deleteUser);
//route 9 : PUT method : update user by id
router.put('/:id',protect,admin,updateUser);


export default router;