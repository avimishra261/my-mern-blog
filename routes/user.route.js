import express from 'express';
import {test} from '../api/controllers/user.controllers';

const router = express.Router();

router.get('/test', test);

export default router;