import { LoginResponse } from "../data/responses/LoginResponse";
import { ClientDAO } from "../dao/ClientDAO";
import { ClientEntity } from "../entity/ClientEntity";
import { Service, Inject } from "typedi";


@Service()
export class ClientsAccountsLogic {
 

    @Inject()
    private clientDAO: ClientDAO ;
  
   async getAll() :Promise<ClientEntity[]> {

       let clients = await this.clientDAO.getAll() ; 
       return clients ;
   }
}



    