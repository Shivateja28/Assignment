import express from 'express'
import connection from './db/config';
import {json, urlencoded} from 'body-parser';
import questionsRoutes from './routes/questionsRoutes';

const app = express();
const cors = require('cors')

app.use(cors());
app.use(json());

app.use(urlencoded({extended:true}));

app.use("/submitquestions", questionsRoutes);

app.use((
    err:Error,
    req:express.Request,
    res:express.Response,
    next:express.NextFunction,
)=>{
    res.status(500).json({message:err.message});
})

connection.sync().then(()=>{
    console.log("Database synced successfully");
}).catch((err)=>{
    console.log("Err", err);
})

app.listen(3002); 