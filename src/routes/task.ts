import express from 'express'
import connect from '../database'

const task: any= (app: any) => {
    const router: any = express.Router()
    app.use('/task', router)

    router.get('/', async(req: any, res: any) => {
        const db: any = await connect()
        const [rows] = await db.query('SELECT * FROM tasks')
        console.log(rows)
        res.status(200).json(rows)
    })
    router.post('/',  async(req: any, res: any) => {
        res.status(200).send('hola')
    })
    router.get('/count')
    router.get('/:id')
    router.put('/:id')
    router.delete('/:id')
}
export default task
