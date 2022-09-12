import {Router} from 'express';

import {
    submitQuestions,
    getAllAnswers
} from '../controller/questionsRoutes'

const router = Router();

router.post("/submit", submitQuestions);

router.get("/get", getAllAnswers);

export default router;