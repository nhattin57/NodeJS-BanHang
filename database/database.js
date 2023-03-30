import mongoose from "mongoose"
import { print, OutputType } from "../helpers/print.js"
import Exception from "../Exceptions/Exception.js"
mongoose.set('strictQuery', true)
async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('connect mongoose sucessfully',OutputType.SUCCESS)
        return connection
       } catch (error) {
        const {code} = error
        if(error.code ==8000){
            
            throw new Exception("Wrong database's username and password")
        }else if(code == 'ENOTFOUND') {
            throw new Exception("Wrong server name/ connectionString")
        }
        throw new Exception("Cannot connect to Mongoose")
    }
}
export default connect