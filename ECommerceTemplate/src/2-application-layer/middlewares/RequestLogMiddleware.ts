

import {KoaMiddlewareInterface} from "routing-controllers";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";

export class RequestLogMiddleware implements KoaMiddlewareInterface { 

    async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
      
        try {

            // Logger.Info("RequestLogMiddleware", JSON.stringify(context)) ;
            await next(); 
        } catch (error) {

            // Logger.Error("RequestLogMiddleware", error) ; 
            await next(error) ;
        }
    } 
}