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
            const [result] = await db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description])
            res.status(200).json({id: result.insertId ,...req.body}) 
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
    router.put('/:id', async(req: any, res: any) => {
        const {id} = req.params
        try {
            const db: any = await connect()
            await db.query('UPDATE tasks SET ? WHERE id = ?', [req.body, id])
            res.sendStatus(204)
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
    // delete a task
    router.delete('/:id', async(req: any, res: any) => {
        const {id} = req.params
        try {
            const db: any = await connect()
            await db.query('DELETE FROM tasks WHERE id = ?', [id])
            res.sendStatus(204)
        } catch (e) {
            console.error(e)
            res.status(400).json(e)
        }
    })
}
export default task