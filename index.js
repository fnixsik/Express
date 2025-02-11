import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://fnixsikweb:fnixsikweb@testlink.adn3x.mongodb.net/?retryWrites=true&w=majority&appName=TestLink',)
.then( ()=> console.log(' db Ok '))
.catch( (err)=> console.log(' db Error  ', err))

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Main  page')
})

app.post('/auth/register', (req, res) => {
    
})


app.listen(4444, (err) => {
    if(err){
        return console(err)
    }

    console.log('Server OK !!!')
})