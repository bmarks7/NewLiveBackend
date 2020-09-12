import {addNewContact,
        getContacts,
        getContactWithEmail,
        updateContact,
        deleteContact,
        addProp,
        getPropWithAddress,
        getPropsWithId,
        getAllProps,
        addHit,
        updateProp,
        deleteProp,
        getHitsOnProp,
        getContactWithId,
        getSpecificHit,
        updatePropText,
        removeHit,
        getAllHits,
        removeAllHits,
        deleteAllProps
} from '../controllers/crmController.js'


const routes = (app) => {

    //Contacts
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        .post(addNewContact);

    app.route('/contactOther/:contactEmail')
        .get(getContactWithEmail)

        .put(updateContact)

        .delete(deleteContact)

    app.route('/contactId/:id')
        .get(getContactWithId)

    app.route('/')

    //props

    app.route('/prop')
        .post(addProp)

        .get(getAllProps)

        .delete(deleteAllProps)
        
    app.route('/prop/:address')
        .get(getPropWithAddress)

        .delete(deleteProp)

    app.route('/props/:id')
        .get(getPropsWithId)
    
    app.route('/prop/:propID/:propText')
        .put(updatePropText)

    //hits

    app.route('/hit')
        .post(addHit)
        .get(getAllHits)
        .delete(removeAllHits)

    app.route('/hitDel/:hitID')
        .delete(removeHit)

    app.route('/hit/:propID')
        .put(updateProp)

        .get(getHitsOnProp)
    
    app.route('/hit/:propID/:userID')
        .get(getSpecificHit)
}

export default routes