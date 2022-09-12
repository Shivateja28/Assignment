"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionsRoutes_1 = require("../controller/questionsRoutes");
const router = (0, express_1.Router)();
router.post("/submit", questionsRoutes_1.submitQuestions);
router.get("/get", questionsRoutes_1.getAllAnswers);
exports.default = router;
