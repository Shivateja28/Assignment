import { RequestHandler } from "express";

import {Questions} from '../models/questionsRoutes';

export const submitQuestions: RequestHandler = async(req, res) =>{
    var questions = await Questions.create({...req.body});
    return "Success"
}


export const getAllAnswers: RequestHandler = async(req, res, next)=>{
    const allTodos: Questions[] = await Questions.findAll();

    return res.status(200).json({message: "Answers fetched successfully", data:allTodos});
}
