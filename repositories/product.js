import Exception from "../Exceptions/Exception.js"
import { Product } from "../models/index.js"

const getAllMembers = async () =>{
    let members = await Member.find()
    return members
}
export default {
    getAllMembers
   
}