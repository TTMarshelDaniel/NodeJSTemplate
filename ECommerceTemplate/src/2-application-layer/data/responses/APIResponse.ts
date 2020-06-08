
import { ResponseError } from "../../../5-system-wide-layer/errors/ResponseError";
import { Response } from "./Response";


export class APIResponse<T extends Response> {


    data? :T = undefined ;
    datas? :T[] = undefined ;
    error? :ResponseError = undefined ;

    private constructor() {
    
    }

    public static Data<T>(data? :T) :APIResponse<T> {

        let response = new APIResponse<T>() ;
        response.data = data ;

        return response ;
    }

    public static Datas<T>(datas? :T[]) :APIResponse<T> {

        let response = new APIResponse<T>() ;
        response.datas = datas ;

        return response ;
    }

    public static Error<T>(error? :ResponseError) :APIResponse<T> {

        let response = new APIResponse<T>() ;
        response.error = error ;

        return response ;
    }

}