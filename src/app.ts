import  express from 'express'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import {config} from 'dotenv'
import cors from 'cors'
import task from './routes/task'
import './database'

const app: any = express()

// midlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
config()
// swagger
const options: Object = {
    definition: {
        info: {
            title: 'task API'
        }
    }, 
    

}
const spects = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spects))
// routes
task(app)

app.listen(3000)
console.log('Server on port 3000')
