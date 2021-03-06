import { Controller, Post, Body, UseBefore, UseAfter, UseInterceptor, OnUndefined, Req, Res } from "routing-controllers";
import { Logger } from "../../5-system-wide-layer/Logger/Logger"; 
import { LoginRequest } from "../data/requests/LoginRequest";
import { LoginLogic } from "../../3-domain-layer/logics/LoginLogic";
import { RequestLogMiddleware } from "../middlewares/RequestLogMiddleware";
import { ResponseLogMiddleware } from "../middlewares/ResponseLogMiddleware";
import { StringCorrectionInterceptor } from "../interceptors/StringCorrectionInterceptor";
import { LoginResponse } from "../data/responses/LoginResponse";
import { APIResponse } from "../data/responses/APIResponse";
import { ResponseError } from "../../5-system-wide-layer/errors/ResponseError";
import { StatusCode } from "../../5-system-wide-layer/errors/ErrorCodes/StatusCodes";
import { ErrorMessages } from "../../5-system-wide-layer/errors/ErrorMessages/ErrorMessages";
import { JSONUtil } from "../../5-system-wide-layer/utils/JSONUtil";
import { Service, Inject } from "typedi";


@Service()
@OnUndefined(404) 
@UseBefore(RequestLogMiddleware)
@UseAfter(ResponseLogMiddleware)
// @UseInterceptor(StringCorrectionInterceptor) 
@Controller("/signUp")
export class RegistrationController {
  
    constructor(private loginLogic: LoginLogic) {
    }
  
    @Post() 
    async post(@Body({ validate : false }) request: LoginRequest) :Promise<APIResponse<LoginResponse>> {

        Logger.Info("RegistrationController.loginLogic", this.loginLogic) ;
        Logger.Info("RegistrationController.post", JSONUtil.stringify(request)) ;
        
        try {

            let response :LoginResponse =  await this.loginLogic.login(request) ;
            return APIResponse.Data(response) ;

        } catch (err) {
            
            Logger.Info("RegistrationController.err", err) ;
            let error :ResponseError = ResponseError.Error(StatusCode.UN_AUTHORIZED, ErrorMessages.UN_AUTHORIZED, err) ; 
            return APIResponse.Error(error) ;
        } 
    }
}

