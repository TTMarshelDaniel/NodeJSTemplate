import { Service, Inject } from "typedi";

import { LoginResponse } from "../../2-application-layer/data/responses/LoginResponse";
import { ClientDAO } from "../dao/ClientDAO";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";


@Service()
export class ClientsAccountsLogic {
 
    @Inject()
    private clientDAO: ClientDAO ;
  
   async getAll() :Promise<ClientEntity[]> {

       let clients = await this.clientDAO.getAll() ; 
       return clients ;
   }
   
}



    