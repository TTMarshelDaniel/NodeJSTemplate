import { LoginRequest } from "../data/requests/LoginRequest";
import { Logger } from "../Logger/Logger";
import { ClientEntity } from "../entity/ClientEntity";
import { ClientDAO } from "../dao/ClientDAO";
import { LoginEntity } from "../entity/LoginEntity";
import { LoginDAO } from "../dao/LoginDAO"; 
import { Role } from "../entity/Role";
import { JSONUtil } from "../utils/JSONUtil";
import { LoginResponse } from "../data/responses/LoginResponse";
import { Service, Inject } from "typedi";


@Service()
export class LoginLogic {
    
    @Inject() 
    private clientDAO: ClientDAO ;

    @Inject() 
    private loginDAO: LoginDAO ;

    public async login(login: LoginRequest) :Promise<LoginResponse> {

        try {
            
            Logger.Info("LoginLogic.post", JSONUtil.stringify(login)) ;

            let clientEntity = await this.createClientEntity(login); 
            Logger.Info("LoginLogic.clientEntity", JSONUtil.stringify(clientEntity)) ;

            let loginEntity = await this.createLoginEntity(clientEntity);  
            Logger.Info("LoginLogic.loginEntity", JSONUtil.stringify(loginEntity)) ;
    
            let loginResponse = this.getLoginResponse(loginEntity) ;
            Logger.Info("LoginLogic.loginResponse", JSONUtil.stringify(loginResponse)) ;

            return loginResponse ;
        } catch (error) {

            throw error ;
        } 
    }

    private getLoginResponse(loginEntity: LoginEntity) {

        let loginResponse = new LoginResponse() ;

        loginResponse.id = loginEntity.loginId ;
        loginResponse.userName = loginEntity.userName ;
        
        return loginResponse ; 
    }

    private async createClientEntity(login: LoginRequest) {
 
        let clientEntity = new ClientEntity() ;
        let date = new Date() ;
        
        clientEntity.userName = login.userName ;
        clientEntity.password = login.password ; 
        clientEntity.createdDate = date;
        clientEntity.modifiedDate = date;
        clientEntity.isDeleted = false;
        
        return await this.clientDAO.addNew(clientEntity) ; 
    }

    private async createLoginEntity(clientEntity: ClientEntity) {

        let loginEntity = new LoginEntity() ;

        loginEntity.userId = clientEntity.clientId ;
        loginEntity.userName = clientEntity.userName ;
        loginEntity.password = clientEntity.password ;
        loginEntity.role = Role.CLIENT ;
        loginEntity.isDeleted = false;

        return await this.loginDAO.addNew(loginEntity) ; 
    }    
}