import mysql2 from 'mysql2/promise'
const config: Object = {
    host: 'localhost',
    user: 'jesus12',
    password: 'jesus12',
    database: 'tasksdb'
}
const connect: any = async() => {
    return await mysql2.createConnection(config)
}
export default connect