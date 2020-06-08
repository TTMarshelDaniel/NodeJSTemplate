import { StatusCode } from "./ErrorCodes/StatusCodes";
import { ErrorMessages } from "./ErrorMessages/ErrorMessages";


export class ResponseError {

    statusCode :StatusCode = undefined;
    errorMessage: ErrorMessages = undefined;
    description: any = undefined;

    public constructor(statusCode :StatusCode, errorMessage: ErrorMessages, description: any) {
        
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
        this.description = description;
    }

    public static Error(statusCode :StatusCode, errorMessage: ErrorMessages, description: any) { 
        return new ResponseError(statusCode, errorMessage, description) ;
    }
}