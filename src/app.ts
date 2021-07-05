/* eslint-disable @typescript-eslint/no-explicit-any */
import  express from 'express'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import task from './routes/task'
import './database'

const app: any = express()

// midlewares
app.use(express.json())
app.use(cors({
    origin: '*',
     credentials: true,
    }))
app.use(morgan('dev'))
// swagger
const options: any = {
    definition: {
        info: {
            title: 'task API'
        }
    },
    apis: ['./src/routes/**/*.ts']
    

}
const spects = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spects))
// routes
task(app)

app.listen(3000)
console.log('Server on port 3000')
