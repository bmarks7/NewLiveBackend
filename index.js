import express from 'express'
import routes from './src/routes/crmRoutes.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const port = 8080

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${port}`)
})

app.listen(port, () => 
    console.log(`Your server is running on port ${port}`)
)