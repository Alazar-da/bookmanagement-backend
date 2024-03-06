const express = require('express')
const mongoose = require('mongoose');
//const Product = require('./models/ProductModels');
const Book = require('./models/BookModels.js');

const cookieParser = require('cookie-parser')//install
const cors = require('cors') //install



var corsOptions = {
  origin: "https://book-management-omega.vercel.app"
};

const app = express()

app.use(cookieParser())
app.use(cors(corsOptions));
/* app.use(cors(corsOptions)) */

app.get('/', function (req, res) {
    res.send('Hello World')
  })

var urlencodedParser = express.urlencoded({extended:true})

app.use(urlencodedParser);

app.use(express.json())
//app.use(cookieParser())

app.post('/Book', async (req,res)=>{
    try{
      /* const {name,age} = req.body; */
      const book = new Book(req.body);
      await book.save().then(
        ()=>{
          res.status(200).json(
            {
              message:"Book uploaded"
            }
          )
        }
      )
    }
    catch{
        res.status(500).json({
          message:"something went wrong"
        })
      }


      })




mongoose.connect('mongodb+srv://alazar-da:ale123@cluster0.eki1tpt.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connected')
    app.listen(5000,()=>{
        console.log('node connnected at 5000')
    })
}).catch((error)=>{
    console.log(error);
})


module.exports=app