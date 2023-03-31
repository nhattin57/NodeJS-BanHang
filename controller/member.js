import { memberRepository } from "../repositories/index.js"
import {EventEmitter} from 'node:events'

const myEvent = new EventEmitter()
//listen
myEvent.on('event.register.member',(params) =>{
    console.log(`they talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) =>{

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ 
    //   errors: errors.array() 
    // });

    // }
    const {email, password} = req.body;
    //call repository
    try {
       let existingMember = await memberRepository.login({email, password})
        res.status(200).json({
        message: 'Login Member successfully',
        data : existingMember
    })
    } catch (exception) {
      res.status(500).json({
        message: exception.toString()
    })
    }
}



const register = async (req, res) =>{
    //destructuring
  const {
    name,
    email, 
    password,
    phone
  } = req.body

    
    //event + emitter
    myEvent.emit('event.register.member', {email, password})

    try {
        debugger
       const member = await memberRepository.register({
            email,
            password, 
            name, 
            phone
       })
       res.status(201).json({
        message: 'register member successfully',
        data : member
    })
    } catch (exception) {
        debugger
        res.status(500).json({
            message: exception.toString()
        })
    }

}

async function getAllMember(req, res){
    
    
    try {
        const members = await memberRepository.getAllMembers()
        res.status(200).json({
            message: 'Get detail members successfully',
            data: members,    
        })    
    }catch(exception) {
        res.status(400).json({
            message: exception.message, 
        })
    }
}

export default {
    getAllMember,
    register,
    login
}