

import { KoaMiddlewareInterface } from "routing-controllers";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";
import { JSONUtil } from "../../5-system-wide-layer/utils/JSONUtil";

export class ResponseLogMiddleware implements KoaMiddlewareInterface {

    async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
      
        // Logger.Info("ResponseLogMiddleware", JSON.stringify(context)) ;

        try {
 
            return await next(); 
        } catch (error) {

            // Logger.Info("ResponseLogMiddleware.error", JSONUtil.stringify(error)) ;
            throw error ;  
        }
    } 
}
 