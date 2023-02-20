import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import productRoute from './routes/product.js'

const app = express()

const port = 5000

dotenv.config();

const connect = async () => {
	try {
		await mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.MONGODB_URL, () => {
			console.log('MongoDB connected')
		})
	} catch (error) {
		console.error(error)
	}
}
mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected!')
})
mongoose.connection.on('connected', () => {
	console.log('MongoDB connected xxx')
})

app.use(express.json());
app.use(cors())
app.use(cookieParser())


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/products', productRoute)


// CUSTOM MIDDLEWARE
const errorHandler = (err, req, res, next) => {
	// console.log('hi')
	// res.status(500).send('hi')

	const errorStatus = err.status || 500
	const errorMessage = err.message || 'Something went wrong!'
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	})
}
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))