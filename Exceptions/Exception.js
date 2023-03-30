import {print, OutputType} from "../helpers/print.js"

export default class Exception extends Error {
    constructor(message, validationErrors={}){
        super(message)//call constructor of parent class(Error)        
        print(message, OutputType.ERROR)
        this.validationErrors = validationErrors
    }
}
