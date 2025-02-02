import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://fnixsikweb:<db_password>@cluster0.ofxzcwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Main  page')
})

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign(
        {
            email: req.body.email,
            fullName: 'Вася Пупкин',
        }, 'secretWord',
    );

    res.json({
        success: true,
        token
    })
})


app.listen(4444, (err) => {
    if(err){
        return console(err)
    }

    console.log('Server OK !!!')
})