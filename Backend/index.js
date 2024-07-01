import express from'express';
import bookrouter from './route/book.route.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express();
const PORT=process.env.PORT||5300;
const uri='mongodb+srv://hdevde2611:UKruieYNcvKRStyT@e-kitaab.qr4co5x.mongodb.net/?retryWrites=true&w=majority&appName=E-KiTAAB';

app.use(cors());
//connect to mongodb
/*  {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }    */
try {
    mongoose.connect(uri); 
    console.log('connect to mongodb')
} catch (error) {
  console.log("Error",error);
}

// difining routes
app.use('/book',bookrouter);
app.listen(PORT,()=>{
console.log(`connect the server${PORT}`)
})


