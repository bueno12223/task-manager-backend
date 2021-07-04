import express from 'express'
import connect from '../database'

const task: any= (app: any) => {
    const router: any = express.Router()
    app.use('/task', router)
    // get a task
    router.get('/', async(req: any, res: any) => {
        try {
            const db: any = await connect()
            const [rows] = await db.query('SELECT * FROM tasks')
            res.status(200).json(rows)
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
    // create a task
    router.post('/',async(req: any, res: any) => {
        const {title, description} = req.body
        try {
            const db: any = await connect()
            const result: any = await db.query('INSERT INTO task (title, description) VALUES (?, ?)', [title, description])
            console.log(typeof result)
            res.status(200).json(result) 
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
    // count a task
    router.get('/count', async(req: any, res: any) => {
        try {
            const db: any = await connect()
            const [rows] = await db.query('SELECT COUNT (*) FROM tasks')
            res.status(200).json({count: rows[0]['COUNT (*)']}) 
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
    // get task by id
    router.get('/:id', async(req: any, res: any) => {
        const {id} = req.params
        try {
            const db: any = await connect()
            const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id])
            res.status(200).json(rows[0] || []) 
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
    // edit a task
    router.put('/:id')
    // delete a task
    router.delete('/:id')
}
export default task