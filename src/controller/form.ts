import { validateEmail } from "../utils/validate";

export default class FormController{ 
    name?:string;
    password?: string;
    email?: string;
    type?: "login" | 'signUp'
    
    constructor( email?: string, password?: string, type?: "login" | 'signUp', name?:string, ) { 
       this.email = email,
       this.name = name,
       this.password = password
       this.type = type
    };
    
    validateFields(): boolean|undefined{
        if(this.type === 'login'){
            if(!this.email || !this.password) return false;
            return true
        }
        else{
            if(!this.email || !this.password || !this.name) return false;
            return true
        }
    };

    validateEmail():boolean|undefined{
        if(typeof this.email === "string") return validateEmail(this.email);
    };
    
 }; 