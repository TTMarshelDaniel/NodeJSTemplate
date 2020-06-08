import { Controller, Post, Body, UseBefore, UseAfter, UseInterceptor, OnUndefined, Req, Res, Get } from "routing-controllers";
import { Service, Inject } from "typedi";
import { Logger } from "../../5-system-wide-layer/Logger/Logger"; 
import { RequestLogMiddleware } from "../middlewares/RequestLogMiddleware";
import { ResponseLogMiddleware } from "../middlewares/ResponseLogMiddleware";
import { APIResponse } from "../data/responses/APIResponse";
import { ResponseError } from "../../5-system-wide-layer/errors/ResponseError";
import { StatusCode } from "../../5-system-wide-layer/errors/ErrorCodes/StatusCodes";
import { ErrorMessages } from "../../5-system-wide-layer/errors/ErrorMessages/ErrorMessages";
import { JSONUtil } from "../../5-system-wide-layer/utils/JSONUtil";
import { ClientsAccountsLogic } from "../../3-domain-layer/logics/ClientsAccountsLogic";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";


@Service()
@Controller("/clientsAccounts")
@OnUndefined(404) 
@UseBefore(RequestLogMiddleware)
@UseAfter(ResponseLogMiddleware)
// @UseInterceptor(StringCorrectionInterceptor) 
export class ClientsAccountsController {
    
    @Inject()
    private clientsAccountsLogic: ClientsAccountsLogic

    @Get()
    async getAll() :Promise<APIResponse<ClientEntity>> {

        Logger.Info("RegistrationController.get", "") ;
        
        try {
            let response :ClientEntity[] =  await this.clientsAccountsLogic.getAll() ;
            return APIResponse.Datas(response) ;

        } catch (err) {
            
            let error :ResponseError = ResponseError.Error(StatusCode.UN_AUTHORIZED, ErrorMessages.UN_AUTHORIZED, err) ; 
            return APIResponse.Error(error) ;
        } 
    }
}

