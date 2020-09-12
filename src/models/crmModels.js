import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required:'Enter a first name'
    },
    lastName: {
        type: String,
        required:'Enter a last name'
    },
    email:{
        type:String,
        required:'Enter an email address'
    },
    password: {
        type: String,
        required:'Enter a password'
    },
    location:{
        type: String,
        required: 'Choose Town/City'
    },
    description:{
        type: String,
        required: 'Enter Description'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

export const PropSchema = new Schema({
    address:{
        type:String,
        required:'Enter the property address'
    },
    rentPrice:{
        type:String,
        required:'Enter the rent price'
    },
    userId:{
        type:String,
        required:'Enter landlord id'
    },
    numHits:{
        type:Number,
        required:'How many hits this property has'
    },
    hitText:{
        type:String,
        required:'Has this prop been hit?'
    },
    posted_date:{
        type:Date,
        default:Date.now
    }

})

export const hitSchema = new Schema({
    userId:{
        type:String,
        required:'Enter seeker id'
    },
    propId:{
        type:String,
        required:'Enter property id'
    },
    posted_date:{
        type:Date,
        default:Date.now
    }
})