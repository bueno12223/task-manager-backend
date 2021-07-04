import  express from 'express'
import task from './routes/task'

const app: any = express()
task(app)

app.listen(3000)
console.log('Server on port 3000')
