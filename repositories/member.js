import Exception from "../Exceptions/Exception.js"
import { Member } from "../models/index.js"
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'
const login = async ({email, password}) =>{
    //print('Login Member in repository', OutputType.INFORMATION)
    let existingMember = await Member.findOne({email}).exec()
    if(existingMember) {
       let isMatch = await bcrypt.compare(password, existingMember.password)
        if(!!isMatch) {
            //create JWT JSON WEB TOKEN
           let token = jwt.sign({
                data: existingMember
            }, 
            process.env.JWT_SECRET,{
                //expiresIn: '60' // 1 minutes
                expiresIn: '10 days'
            }
            //clone and add more properties
            )
            return {
                ...existingMember.toObject(),
                password: "not show",
                token : token
            }
        } else {
            throw new Exception('Wrong email or password')
        }
    } else {
        throw new Exception('Wrong email or password')

    }
}



const register = async ({
    name,
    email, 
    password,
    phone
}) =>{
    try {
       
        const existingMember = await Member.findOne({email}).exec()
        if(!!existingMember) {
            throw new Exception("Member already exists")
        }
     
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
        //insert to db
        const newMember = await Member.create({
            name, email,
            password: hashPassword,
            phone
        })
        return  newMember
    } catch (exception) {
        
        throw new Exception("Cannot register Member")
    }

    //validate
    // print('Register Member in Member with: name'
    // +name +'email: '+email+' password: '+password+
    // 'phone: '+phoneNumber+' address: '+address,OutputType.INFORMATION)
}

const getAllMembers = async () =>{
    let members = await Member.find()
    return members
}

export default {
    getAllMembers,
    register,
    login
}