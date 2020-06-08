import { Service, Inject } from "typedi";

import { LoginRequest } from "../../2-application-layer/data/requests/LoginRequest";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";
import { ClientDAO } from "../dao/ClientDAO";
import { LoginEntity } from "../../4-data-layer/entity/LoginEntity";
import { LoginDAO } from "../dao/LoginDAO"; 
import { RoleEntity } from "../../4-data-layer/entity/RoleEntity";
import { JSONUtil } from "../../5-system-wide-layer/utils/JSONUtil";
import { LoginResponse } from "../../2-application-layer/data/responses/LoginResponse";
import { LoginDTO } from "../dto/LoginDTO";
import { RoleDTO } from "../dto/RoleDTO";
import { ClientDTO } from "../dto/ClientDTO";


@Service()
export class LoginLogic {
    
    @Inject() 
    private clientDAO :ClientDAO ;

    @Inject() 
    private loginDAO :LoginDAO ;

    public async login(login: LoginRequest) :Promise<LoginResponse> {

        try {
            
            Logger.Info("LoginLogic.login.LoginRequest", JSONUtil.stringify(login)) ;

            let clientDTO = this.getClientDTO(login) ; 
            Logger.Info("LoginLogic.login.clientDTO", JSONUtil.stringify(clientDTO)) ;

            clientDTO = await this.clientDAO.addNew(clientDTO) ; 
            Logger.Info("LoginLogic.login.clientDTO", JSONUtil.stringify(clientDTO)) ;

            let loginDTO = this.getLoginDTO(clientDTO);  
            Logger.Info("LoginLogic.login.loginDTO", JSONUtil.stringify(loginDTO)) ;

            loginDTO = await this.loginDAO.addNew(loginDTO);  
            Logger.Info("LoginLogic.login.loginDTO", JSONUtil.stringify(loginDTO)) ;
    
            let loginResponse = this.getLoginResponse(loginDTO) ;
            Logger.Info("LoginLogic.login.loginResponse", JSONUtil.stringify(loginResponse)) ;

            return loginResponse ;
        } catch (error) {

            Logger.Info("LoginLogic.login.error", JSONUtil.stringify(error)) ;
            throw error ;
        } 
    }

    private getLoginResponse(loginDTO: LoginDTO) :LoginResponse {

        let loginResponse = new LoginResponse() ;

        loginResponse.id = loginDTO.loginId ;
        loginResponse.userName = loginDTO.userName ;
        
        return loginResponse ; 
    }

    private getClientDTO(login: LoginRequest) :ClientDTO {
 
        let dto = new ClientDTO() ;
        let date = new Date() ;
        
        dto.userName = login.userName ;
        dto.password = login.password ; 
        dto.createdDate = date;
        dto.modifiedDate = date;
        dto.isDeleted = false;
        
        return dto ;
    }

    private getLoginDTO(clientDTO: ClientEntity) :LoginDTO {

        let dto = new LoginDTO() ;

        dto.userId = clientDTO.clientId ;
        dto.userName = clientDTO.userName ;
        dto.password = clientDTO.password ;
        dto.role = RoleDTO.CLIENT ;
        dto.isDeleted = false;

        return dto ;
    }    
}