import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()
const {DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_NAME: database} = process.env  

const connect: any = async() => {
    return await mysql2.createConnection({host, user, password, database})
}
export default connect