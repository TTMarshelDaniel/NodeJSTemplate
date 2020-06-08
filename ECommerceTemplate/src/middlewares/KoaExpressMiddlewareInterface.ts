import { KoaMiddlewareInterface, ExpressMiddlewareInterface } from "routing-controllers";


export interface KoaExpressMiddlewareInterface extends KoaMiddlewareInterface, ExpressMiddlewareInterface {
     
    use(context: any, next: (err?: any) => Promise<any>): Promise<any>;

    use(request: any, response: any, next?: (err?: any) => any): any ;
}