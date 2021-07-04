import express from "express";

const task: any= (app: any) => {
    const router: any = express.Router()
    app.use('/task', router)

    router.get('/', async(req: any, res: any) => {
        res.status(200).send('hola')
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
