import  express from 'express'
import task from './routes/task'
import './database'

const app: any = express()

// midlewares
app.use(express.json())

// routes
task(app)

app.listen(3000)
console.log('Server on port 3000')
