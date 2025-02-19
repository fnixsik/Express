import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import {registerValidation} from './validations/auth.js';
import { validationResult } from 'express-validator';
import UserModel from './models/User.js';


mongoose.connect('mongodb+srv://fnixsikweb:fnixsikweb@testlink.adn3x.mongodb.net/?retryWrites=true&w=majority&appName=TestLink',)
.then( ()=> console.log(' db Ok '))
.catch( (err)=> console.log(' db Error  ', err))

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Main  page')
})

app.post('/auth/register', registerValidation, (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        passwordHash: req.body.passwordHash,
    })

    res.json({
        success: true,
    })
})


app.listen(4444, (err) => {
    if(err){
        return console(err)
    }

    console.log('Server OK !!!')
})