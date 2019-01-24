import express, { Router } from 'express';
// Import index action from movies controller
import { index } from './controllers/movies';
import user from './controllers/users'
import login from './controllers/sessions'

// Initialize the router
const router = Router();
console.log("HHHHHHHHH")
// Handle /movies.json route with index action from movies controller
router.route('/movies.json').get(index);
router.route('/register.json').post(user);
router.route('/login.json').post(login);




export default router;