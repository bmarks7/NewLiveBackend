import mongoose from 'mongoose'
import {ContactSchema, PropSchema, hitSchema} from '../models/crmModels.js'

const Contact = mongoose.model('Contact', ContactSchema)
const Prop = mongoose.model('Prop', PropSchema)
const Hit = mongoose.model('Hit', hitSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    });
}

export const getContactWithEmail = (req, res) => {
    Contact.find({email: req.params.contactEmail}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContactWithId = (req, res) => {
    Contact.find({_id: req.params.id}, (err, contacts) => {
        if(err){
            res.send(err)
        }
        res.json(contacts)
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({email: req.params.contactEmail}, req.body, {new: true, useFindAndModify: false}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    });
}

export const deleteContact = (req, res) => {
    Contact.remove({email: req.params.contactEmail}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'successfully deleted contact'})
    });
}

export const addProp = (req, res) => {
    let newProp = new Prop(req.body)

    newProp.save((err, prop) => {
        if(err){
            res.send(err)
        }
        res.json(prop)
    });
}

export const getPropWithAddress = (req, res) => {
    Prop.find({address: req.params.address}, (err, prop) =>{
        if(err){
            res.send(err)
        }
        res.json(prop)
    })
}

export const getPropsWithId = (req, res) => {
    Prop.find({userId: req.params.id}, (err, props) => {
        if(err){
            res.send(err)
        }
        res.send(props)
    })
}

export const getAllProps = (req, res) => {
    Prop.find({}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    });
}

export const addHit = (req, res) => {
    const newHit = new Hit(req.body)

    newHit.save((err, hit) => {
        if(err){
            res.send(err)
        }
        res.json(hit)
    })
}

export const updateProp = (req, res) => {
    Prop.findOneAndUpdate({_id: req.params.propID}, req.body, {new: true, useFindAndModify: false}, (err, prop) => {
        if(err){
            res.send(err)
        }
        res.json(prop)
    });
}

export const deleteProp = (req, res) => {
    Prop.remove({address: req.params.address}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'successfully deleted property'})
    });
}

export const deleteAllProps = (req, res) => {
    Prop.remove({}, (err, prop) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'all props deleted'})
    })
}

export const getHitsOnProp = (req, res) => {
    Hit.find({propId: req.params.propID}, (err, hits) => {
        if(err){
            res.send(err)
        }
        res.json(hits)
    })
}

export const updatePropText = (req, res) => {
    Prop.findByIdAndUpdate({_id: req.params.propID}, req.body, {new:true, useFindAndModify:false}, (err, prop) => {
        if(err){
            res.send(err)
        }
        res.json(prop)
    })
}

export const getSpecificHit = (req, res) => {
    Hit.find({userId: req.params.userID, propId: req.params.propID}, (err, hit) => {
        if(err){
            res.send(err)
        }
        res.json(hit)
    })
}

export const removeHit = (req, res) => {
    Hit.remove({_id: req.params.hitID}, (err, hit) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'hit deleted'})
    })
}

export const getAllHits = (req, res) => {
    Hit.find({}, (err, hits) => {
        if(err){
            res.send(err)
        }
        res.json(hits)
    })
}

export const removeAllHits = (req, res) => {
    Hit.remove({}, (err, hits) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'all hits deleted'})
    })
}
