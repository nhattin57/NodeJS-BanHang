import { memberRepository } from "../repositories/index.js"

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
    getAllMember
}