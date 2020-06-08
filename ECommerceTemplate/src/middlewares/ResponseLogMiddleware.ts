

import {KoaMiddlewareInterface} from "routing-controllers";
import { Logger } from "../Logger/Logger";
import { JSONUtil } from "../utils/JSONUtil";

export class ResponseLogMiddleware implements KoaMiddlewareInterface {

    async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
      
        Logger.Info("ResponseLogMiddleware", JSON.stringify(context)) ;

        try {
 
            return await next(); 
        } catch (error) {

            Logger.Info("ResponseLogMiddleware.error", JSONUtil.stringify(error)) ;
            throw error ;  
        }
    } 
}
 