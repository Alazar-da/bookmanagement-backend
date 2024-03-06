const mongoose = require('mongoose');

const BookSchema=mongoose.Schema(

    {
        Title:{
            type:String,
        },
        Author:{
            type:String,
        },
        Edition:{
            type:String,
        },
        Price:{
            type:String,
        },
        Status:{
            type:String,
        },
        Overview:{
            type:String,
        },
        Type:{
            type:String,
        },
        Genere:{
            type:String,
        }
    },
    {
        timestamps:true
    }
)

const Book=mongoose.model('Book',BookSchema);

module.exports=Book;