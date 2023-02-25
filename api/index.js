const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

const authRoute = require('./routes/auth.js')
const userRoute = require('./routes/user.js')
const productRoute = require('./routes/product.js')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

const dotenv = require('dotenv')
dotenv.config();

// console.log('----- ', process.env.MONGO_URL)

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('DB connection successfull!')
	})
	.catch((err) => {
		console.log(err)
	})

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute)
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)
app.use('/api/checkout', stripeRoute)

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`))