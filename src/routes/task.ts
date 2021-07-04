import { Router } from "express";

const task: any= (app: any) => {
    const router: any = Router()
    app.use(router, '/task')

    router.get('/')
    router.post('/')
    router.get('/count')
    router.get('/:id')
    router.put('/:id')
    router.delete('/:id')
}
export default task
