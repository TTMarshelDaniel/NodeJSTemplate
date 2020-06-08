import { MinLength, IsEmail } from "class-validator"; 
import { Request } from "./Request";


export class LoginRequest extends Request {
 
    @IsEmail()
    email: string;

    userName? :string ;
 
    @MinLength(6)
    password :string ;
}
 

