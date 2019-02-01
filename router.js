import express, { Router } from 'express';
import { index } from './controllers/movies';
import user, {updateUser} from './controllers/users'
import { logout, login} from './controllers/sessions'

// Initialize the router
const router = Router();
console.log("HHHHHHHHH")
// Handle /movies.json route with index action from movies controller
router.route('/movies.json').get(index);
router.route('/register.json').post(user);
router.route('/login.json').post(login);
router.route('/logout.json').delete(logout);
router.route('/updateUser.json').put(updateUser)


export default router;