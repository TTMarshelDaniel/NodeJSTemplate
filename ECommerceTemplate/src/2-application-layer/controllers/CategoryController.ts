import { Inject, Service } from "typedi";
import { Controller, OnUndefined, UseBefore, UseAfter, Get, Post } from "routing-controllers";

import { CategoryTreeLogic } from "../../3-domain-layer/logics/CategoryTreeLogic";
import { RequestLogMiddleware } from "../middlewares/RequestLogMiddleware";
import { ResponseLogMiddleware } from "../middlewares/ResponseLogMiddleware";
import { APIResponse } from "../data/responses/APIResponse";
import { CategoryTreeEntity } from "../../4-data-layer/entity/CategoryTreeEntity";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";
import { ResponseError } from "../../5-system-wide-layer/errors/ResponseError";
import { StatusCode } from "../../5-system-wide-layer/errors/ErrorCodes/StatusCodes";
import { ErrorMessages } from "../../5-system-wide-layer/errors/ErrorMessages/ErrorMessages";


@Service()
@Controller("/category")
@OnUndefined(404) 
@UseBefore(RequestLogMiddleware)
@UseAfter(ResponseLogMiddleware)
// @UseInterceptor(StringCorrectionInterceptor) 
export class CategoryController {
    
    @Inject()
    private categoryTreeLogic: CategoryTreeLogic

    @Get()
    async getAll() :Promise<APIResponse<CategoryTreeEntity>> {

        Logger.Info("CategoryController.get", "") ;
        
        try {
            let response :CategoryTreeEntity[] =  await this.categoryTreeLogic.getAll() ;
            return APIResponse.Datas(response) ;

        } catch (err) {
            
            let error :ResponseError = ResponseError.Error(StatusCode.UN_AUTHORIZED, ErrorMessages.UN_AUTHORIZED, err) ; 
            return APIResponse.Error(error) ;
        } 
    }

    // @Post()
    // async create(category :Category) :Promise<APIResponse<CategoryTreeEntity>> {

    //     Logger.Info("CategoryController.get", "") ;
        
    //     try {
    //         let response :CategoryTreeEntity =  await this.categoryTreeLogic.add() ;
    //         return APIResponse.Data(response) ;

    //     } catch (err) {
            
    //         let error :ResponseError = ResponseError.Error(StatusCode.UN_AUTHORIZED, ErrorMessages.UN_AUTHORIZED, err) ; 
    //         return APIResponse.Error(error) ;
    //     } 
    // }
}

